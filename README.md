# SemanaOmniStack10
SemanaOmniStack10 - RocketSeat - Projeto "DevRadar"

## Estrutura do projeto

| Pasta | Descrição |
| ----------- | ----------- |
| ./backend | API REST feita em Express conectando o mobile e o front-end ao banco de dados MongoDB |
| ./frontend | Interface web RectJS para cadastro de Devs |
| ./mobile | Interface mobile para consultar os Devs cadastrados |

## Configurações de conexão do Banco de Dados

Arquivo **./backend/src/index.js**

```javascript
// Substituir <string_connection> pela string de conexão do MongoDB
mongoose.connect('<string_connection>', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
```

Arquivo **./mobile/src/services/api.js**

```javascript
// Substituir <ip_backend> pelo IP em que está executando o back-end da aplicação
const api = axios.create({
	baseURL: '<ip_backend>',
})
```