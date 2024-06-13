import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLibraryComponent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-800">
      <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          className="px-4 py-2 bg-red-500 rounded hover:bg-red-700"
          onClick={() => navigate('/')}
        >
          Log Out
        </button>
      </header>

      <div className="flex flex-grow overflow-hidden">
        <nav className="flex-shrink-0 w-64 p-4 bg-white border-r">
          <ul className="space-y-2">
            <li>
              <button
                className="w-full text-left px-4 py-2 bg-blue-100 rounded hover:bg-blue-200"
                onClick={() => navigate('/adminhome')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 bg-blue-100 rounded hover:bg-blue-200"
                onClick={() => navigate('/adminlibrary')}
              >
                Library
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 bg-blue-100 rounded hover:bg-blue-200"
                onClick={() => navigate('/adminreport')}
              >
                Reports
              </button>
            </li>
          </ul>
        </nav>

        <main className="flex-grow p-6 overflow-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4 p-6">
            <h2 className="text-2xl font-bold text-gray-900">Admin Library Page</h2>
            <p className="text-gray-600">Velkommen til Admin library siden. Genereres nå av komponenten.</p>
            <section className="space-y-4">
              <div className="p-4 bg-blue-50 rounded">
                <h3 className="text-xl font-semibold">Library Overview</h3>
                <p className="text-gray-700">Her finner du en oversikt over bibliotekets ressurser og dokumenter.</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminLibraryComponent;
