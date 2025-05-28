import React from "react";
import MatriculaAgendamento from "./components/MatriculaAgendamento";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Toaster />
      <MatriculaAgendamento />
    </div>
  );
}

export default App;
