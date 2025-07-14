import herbs from '../data/herbs.json';

export default function Encyclopedia() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Herb Encyclopedia</h1>
      {herbs.map((herb, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl">{herb.name}</h2>
          <p><strong>Effects:</strong> {herb.effects}</p>
          <p><strong>Usage:</strong> {herb.usage}</p>
        </div>
      ))}
    </div>
  );
}