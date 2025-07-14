import herbs from '../data/herbs.json'; // or wherever your JSON is

export default function Encyclopedia() {
  return (
    <main className="p-8 text-white">
      <h1 className="text-4xl font-retro mb-6">🌿 Psychoactive Herb Index</h1>
      <div className="space-y-4">
        {herbs.map((herb, index) => (
          <details key={index} className="bg-purple-900/40 p-4 rounded">
            <summary className="cursor-pointer text-xl font-semibold">{herb.name}</summary>
            <div className="mt-2 text-sm space-y-1">
              {Object.entries(herb).map(([key, value]) => (
                key !== 'name' && (
                  <p key={key}>
                    <strong className="capitalize">{key}:</strong> {value?.toString()}
                  </p>
                )
              ))}
            </div>
          </details>
        ))}
      </div>
    </main>
  );
}
