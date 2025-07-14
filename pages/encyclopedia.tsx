import React, { useState } from 'react';
import herbs from '../data/herbs.json'; // adjust if your path is different

type Herb = {
  name: string;
  latin_name?: string;
  effects?: string;
  active_compounds?: string;
  dosage?: string;
  preparation?: string;
  warnings?: string;
  [key: string]: any;
};

export default function Encyclopedia() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-retro text-center text-white mb-6">🌿 Herb Encyclopedia</h1>
      {herbs.map((herb: Herb, index: number) => (
        <div key={index} className="mb-4 border border-purple-500 rounded">
          <button
            className="w-full text-left px-4 py-2 bg-purple-800 text-white font-bold"
            onClick={() => toggle(index)}
          >
            {herb.name}
          </button>
          {openIndex === index && (
            <div className="bg-purple-100 text-black px-4 py-3">
              {Object.entries(herb).map(([key, value]) => {
                if (key === "name") return null;
                return (
                  <p key={key}>
                    <strong>{key.replace(/_/g, ' ')}:</strong> {value}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
