import React from 'react';
import { useNavigate } from 'react-router-dom';

function InstructionComponent() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Instruction Page</h2>
        <p className="text-gray-600">Velkommen til Instruction Page. Genereres nå fra Component</p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default InstructionComponent;
