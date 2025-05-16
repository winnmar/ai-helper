import { AIChat } from "./components/chat";
import { ThemePicker } from "./components/theme-picker";
import { GameShowcase } from "./components/game-showcase";

export default function Chat() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <main className="max-w-4xl mx-auto">
        <ThemePicker />
        <h1 className="text-2xl font-bold text-center mb-8">Board Game Rules Lawyer</h1>
        <h2 className="text-xl font-bold text-center mb-8">Are you tired of those moments in your board game sessions when you have to wait for your friend to pull out the rulebook and painfully go through the pages to find what you need? </h2>
        <h2 className="text-xl font-bold text-center mb-8">No more! </h2>
        <h2 className="text-xl font-bold text-center mb-8">Board Game Rules Lawyer is here to help you! </h2>
        <h2 className="text-xl font-bold text-center mb-8">Ask away! </h2>
        <GameShowcase />
        <AIChat />
      </main>
    </div>
  );
}
