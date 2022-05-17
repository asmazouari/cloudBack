FROM node:latest
# Create app directory
WORKDIR /usr/src/main
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "start" ]