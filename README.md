# Delivery Much Tech Challenge

O desafio se baseia na construição de uma API que recebe ingredientes como parâmetro de entrada em uma chamada GET e retorna uma lista de receitas. Para isso, deve-se consumir as APIs públicas da RecipePuppy (http://www.recipepuppy.com/about/api/) e da Giphy (https://developers.giphy.com/docs/).

O endpoint a ser chamado seria esse:
```
http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}

```

Exemplo de chamada:
```
http://127.0.0.1/recipes/?i=onion,tomato

```

Estrutura da resposta:
```
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}
```


## Criação do ambiente

### Clonar projeto do GitHub
```
https://github.com/vitorgmorigi/delivery-much-challenge.git

```

### Instalação das dependências
```
npm install

```
### Variáveis de ambiente
Deve ser criado um arquivo ```.env``` na raíz do projeto contendo as seguintes variáveis de ambiente:
```
PORT=(substituir por um número de porta da sua preferência)
GIPHY_API_KEY=(substituir pela api_key gerada no site da giphy)
```
Para gerar uma GIPHY_API_KEY basta acessar o site https://developers.giphy.com/docs e clicar em "Create an app". Em seguida, basta seguir as instruções no site e criar a key.

### Rodar o projeto
- Rodar direto na máquina
 ```
 npm start
 ```
 - Rodar pelo Docker
 ```
 docker-compose up -d
 ```
 
 ### Executar os testes unitários
 ```
 npm test
 ```
 


