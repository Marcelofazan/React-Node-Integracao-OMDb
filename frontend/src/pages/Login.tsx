import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    // Estado local para guardar o token APENAS após este login com sucesso
    const [loggedInToken, setLoggedInToken] = useState<string | null>(null);
    
    const { login } = useAuth();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setError('');
        try {
            // Executa o login
            await login(email, password);
            
            // Busca o token que o AuthContext acabou de salvar no localStorage
            const tokenGerado = localStorage.getItem('token');
            
            if (tokenGerado) {
                setLoggedInToken(tokenGerado); // Ativa a tela do token impresso
                alert('Login realizado com sucesso!');
            } else {
                setError('Login feito, mas o token não foi encontrado.');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      
            <div style={{ marginBottom: '20px' }}>
                <a href="/" style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px' }}>
                ← Voltar
                </a>
            </div>
      
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* SÓ MOSTRA O FORMULÁRIO SE O LOGIN NÃO FOI FEITO AGORA */}
            {!loggedInToken ? (
                <form onSubmit={handleSubmit}>
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
                        Login
                    </button>
                </form>
            ) : (
                /* SÓ MOSTRA ESTA TELA SE O USUÁRIO ACABOU DE LOGAR */
                <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #28a745', backgroundColor: '#d4edda', borderRadius: '4px' }}>
                    <h3 style={{ color: '#155724', marginTop: 0 }}>Login Concluído!</h3>
                    <p style={{ color: '#155724' }}>Seu token de autenticação ativo é:</p>
                  
                    <pre style={{ wordBreak: 'break-all', whiteSpace: 'pre-wrap', background: '#f8f9fa', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                        <code>{loggedInToken}</code>
                    </pre>

                    <p style={{ fontSize: '0.85em', color: '#6c757d' }}>
                        * Este token já está salvo no seu <strong>localStorage</strong>.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Login;