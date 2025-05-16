"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import { useRef, useEffect } from "react";

export function AIChat() {
  const {messages, input, handleSubmit, handleInputChange, isLoading} = useChat();

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  return (
    <Card className="w-full max-w-3xl mx-auto min-h-[400px] flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Chat</h2>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === "user" ? "justify-end" : "justify-start"
              } items-end"`}
              style={{ wordBreak: 'break-word' }}
            >
              {message.role === "assistant" && (
                <Avatar>
                  <AvatarImage src="/bot-avatar.svg" alt="Bot" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`rounded-lg px-5 py-3 max-w-[80%] whitespace-pre-line shadow-sm text-base leading-relaxed ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground ml-2"
                    : "bg-muted mr-2"
                }`}
                style={{ marginTop: 2, marginBottom: 2 }}
              >
                {message.role === "assistant" ? (
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
              {message.role === "user" && (
                <Avatar>
                  <AvatarImage src="/user-avatar.svg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <Avatar>
                <AvatarImage src="/bot-avatar.svg" alt="Bot" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="rounded-lg px-4 py-3 bg-muted">
                <div className="flex space-x-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>Send</Button>
        </div>
      </form>
    </Card>
  );
} 