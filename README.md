## React-Node-Integracao-Api
Exemplo de Integração OMDb Api em Node.js e React com banco de dados SQL-Server.

#### 📋 O que voçê vai ver nesse Projeto
.env
LocalStorage
Jest
JWT
Swagger 


📁 Requisitos do Projeto
Necessário Habilitar TCP/IP no SQLServer Configuration Manager 

- Passo 1: Forçar a porta 1433 no TCP/IPNo lado direito, clique com o botão direito em TCP/IP e escolha Properties (Propriedades).

Na aba Protocol, mude a opção Enabled para Yes (caso esteja No).
Agora, mude para a aba IP Addresses (Endereços IP).
Role a janela até o final, lá embaixo na seção IPAll.
Limpe completamente o campo TCP Dynamic Ports (deixe em branco, apague o 0 se tiver).
No campo TCP Port, digite 1433.Clique em Aplicar e depois em OK.

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

http://localhost:3000/
http://localhost:3000/api-docs/
http://localhost:3000/api/ping
http://localhost:3000/api/test-db
http://localhost:3000/api/health
http://localhost:3000/api/auth/register
http://localhost:3000/api/auth/login


VSCode Terminal [2]
//Frontend 
npm run dev
http://localhost:5173/



#### 🧪 Executar Jest e Postman 
VSCode Terminal [3]
```bash
npx jest
```

- Postman
http://localhost:3000/api/auth/register
{
    "username" : "marcelo2@gmail.com",
    "email" : "marcelo2@gmail.com",
    "password" : "123123"
}


http://localhost:3000/api/auth/login
{
    "email" : "marcelo2@gmail.com",
    "password" : "123123"
}







