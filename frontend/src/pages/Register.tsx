import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Estado local para guardar o token APENAS deste novo cadastro
  const [registeredToken, setRegisteredToken] = useState<string | null>(null);
  
  const { register } = useAuth();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Executa o cadastro
      await register(username, email, password);
      
      // Busca o token que o AuthContext acabou de salvar no localStorage
      const tokenGerado = localStorage.getItem('token');
      
      if (tokenGerado) {
        setRegisteredToken(tokenGerado); // Ativa a tela do token impresso
        alert('Cadastro realizado com sucesso!');
      } else {
        setError('Usuário criado, mas o token não foi encontrado.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao realizar o cadastro.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      
      <div style={{ marginBottom: '20px' }}>
        <a href="/" style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px' }}>
          ← Voltar
        </a>
      </div>

      <h2>Criar Conta</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* SÓ MOSTRA O FORMULÁRIO SE O CADASTRO NÃO FOI FEITO AGORA */}
      {!registeredToken ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Usuário:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Senha:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Registrar
          </button>
        </form>
      ) : (
        /* SÓ MOSTRA ESTA TELA SE O USUÁRIO ACABOU DE CLICAR EM REGISTRAR */
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #28a745', backgroundColor: '#d4edda', borderRadius: '4px' }}>
          <h3 style={{ color: '#155724', marginTop: 0 }}>Cadastro Concluído!</h3>
          <p style={{ color: '#155724' }}>Seu token de autenticação foi gerado:</p>
          
          <pre style={{ wordBreak: 'break-all', whiteSpace: 'pre-wrap', background: '#f8f9fa', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <code>{registeredToken}</code>
          </pre>

          <p style={{ fontSize: '0.85em', color: '#6c757d' }}>
            * Este token já está salvo no seu <strong>localStorage</strong>.
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;