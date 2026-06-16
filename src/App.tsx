import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../frontend/src/pages/Login"; 
import Register from "../frontend/src/pages/Register"; 

// Certifique-se de que a pasta 'contexts' está dentro da sua pasta 'src'
import { AuthProvider } from "../frontend/src/contexts/AuthContext"; 
import TesteSenha from '../TesteSenha'; // Arquivo teste para criar senha criptografada

function Home() {
  const [message, setMessage] = useState("Waiting for backend...");

  useEffect(() => {
    fetch("http://localhost:3000/api/ping")
        .then((res) => res.json())
        .then((data) => setMessage(`Back-end diz: ${data.message}`))
        .catch(() => setMessage("Error: Backend not reachable"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>Integração OMDB</h1>
      <h3>Cadastre seu email em https://www.omdbapi.com/ para gerar sua Key</h3> 
      <h3>Após autenticação copie seu JWT use a API em "http://localhost:3000/api-docs/"</h3>
      <p>{message}</p>
      
      {/* Container centralizado para os botões */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '30px' }}>
        
        {/* Bloco do Login */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>Já possui uma conta?</span>
          <Link to="/login">
            <button style={{ padding: '10px 20px', cursor: 'pointer', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', minWidth: '120px' }}>
              Login
            </button>
          </Link>
        </div>

        {/* Bloco do Registro */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>Novo por aqui? Crie sua conta:</span>
          <Link to="/register">
            <button style={{ padding: '10px 20px', cursor: 'pointer', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', minWidth: '120px' }}>
              Registrar
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Colocamos o AuthProvider de volta aqui para proteger os componentes */}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/TesteSenha" element={<TesteSenha />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;