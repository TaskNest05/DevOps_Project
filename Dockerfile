# Use a imagem base do Node.js
FROM node:16

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json (se disponível)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o conteúdo da aplicação para o container
COPY . .

# Expondo a porta onde o backend vai rodar
EXPOSE 5000

# Define o comando para rodar o servidor
CMD ["npm", "start"]
