import Image from 'next/image';

export function GameShowcase() {
  const games = [
    { title: 'Everdell', image: '/everdell.jpg' },
    { title: 'Cascadia', image: '/cascadia.jpg' },
    { title: 'Wingspan', image: '/wingspan.jpg' },
    { title: 'Ark Nova', image: '/arknova.jpg' },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-center mb-6">
        Currently Supported Games
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <div key={game.title} className="relative overflow-hidden rounded-lg transition-all group">
            <Image
              src={game.image}
              alt={`${game.title} board game cover`}
              width={400}
              height={250}
              className="rounded-lg transition-transform duration-300 group-hover:scale-105 object-contain"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              <h3 className="text-center font-medium">{game.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 