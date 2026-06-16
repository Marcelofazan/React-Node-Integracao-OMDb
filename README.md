## 🛠️ React-Node-Integracao-Api-Omdb
Exemplo de Integração Api OMDB em React e Node.js com banco de dados SQL-Server.

#### 📋 O que voçê vai ver nesse Projeto

| Tecnologia | Descrição |
|-----------|------------|
| .env | Gerenciar variáveis de ambiente, garantindo segurança (não expor senhas/chaves) e flexibilidade entre ambientes (desenvolvimento, produção)|
| LocalStorage | Armazenamento em cache de dados no navegador de forma persistente em pares de chave e valor |
| Jest | Ferramenta framework de testes |
| JWT | É um crachá digital usado para identificar usuários e trocar informações de forma segura entre computadores |
| Swagger | Criar, documentar e consumir APIs RESTful. |

#### 📁 Requisitos do Projeto
Necessário Habilitar TCP/IP no SQLServer Configuration Manager 

- Passo 1: Forçar a porta 1433 no TCP/IPNo lado direito, clique com o botão direito em TCP/IP e escolha Properties (Propriedades). Na aba Protocol, mude a opção Enabled para Yes (caso esteja No).
- Agora, mude para a aba IP Addresses (Endereços IP). Role a janela até o final, lá embaixo na seção **IPAll**. Limpe completamente o campo **TCP Dynamic Ports** (deixe em branco, apague o 0 se tiver).
- No campo TCP Port, digite 1433.Clique em Aplicar e depois em OK.

- Passo 2: Reiniciar o serviço do Banco de DadosO SQL Server só vai ler essa nova porta se for reiniciado:
No menu esquerdo do mesmo programa, suba e clique em SQL Server Services.No lado direito, clique com o botão direito em SQL Server (SQLEXPRESS) e escolha Restart (Reiniciar).

- Para saber a porta que o MSSQL esta rodando
```bash
$RegPath = "HKLM:\SOFTWARE\Microsoft\Microsoft SQL Server\*\MSSQLServer\SuperSocketNetLib\Tcp\IPAll"
$Porta = Get-ItemProperty -Path (Get-Item $RegPath).PSPath | Select-Object -ExpandProperty TcpPort
Write-Host "A porta TCP configurada é: $Porta"
```

Criar usuario no site API omdb e copiar o **Chave Key** para poder fazer consultas da API
[https://www.omdbapi.com/](https://www.omdbapi.com/)


#### 🔄 Executar a aplicação

#### 📁 Backend
VSCode Terminal [1]
```bash
npm install 
cd backend
node src/scripts/create-database.cjs
npx tsx src/test-db.ts
```

- Para executar a aplicação 
```bash
npx tsx src/index.ts 
```

| HOST | URL |
|-----------|-----------|
| Metodo: GET | http://localhost:3000/ |
| Metodo: GET | http://localhost:3000/api-docs/ |
| Metodo: GET | http://localhost:3000/api/ping |
| Metodo: GET | http://localhost:3000/api/test-db |
| Metodo: GET | http://localhost:3000/api/health |
| Metodo: POST | http://localhost:3000/api/auth/register |
| Metodo: POST | http://localhost:3000/api/auth/login |

#### 📁 Frontend 
VSCode Terminal [2]
```bash
npm run dev
```

O Projeto é Frontend é executado em **http://localhost:5173/**

#### 🧪 Executar Testes Unitários

VSCode Terminal [3]
```bash
npx jest
```



