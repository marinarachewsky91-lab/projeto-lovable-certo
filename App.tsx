import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Financeiro from './pages/Financeiro';
import Cobrancas from './pages/Cobrancas';
import { ClientProvider } from './contexts/ClientContext';

const App: React.FC = () => {
  return (
    <ClientProvider>
      <HashRouter>
        <div className="flex min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white selection:text-zinc-950 w-full overflow-x-hidden">
          <Sidebar />
          {/* Fixed: Removed 'w-full' which was causing horizontal overflow when combined with ml-64 */}
          <main className="flex-1 ml-64 p-8 min-w-0">
            <div className="max-w-7xl mx-auto w-full">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/financeiro" element={<Financeiro />} />
                <Route path="/cobrancas" element={<Cobrancas />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </main>
        </div>
      </HashRouter>
    </ClientProvider>
  );
};

export default App;