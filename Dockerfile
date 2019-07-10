FROM node:10

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install --only=production

# Copy local nuxt code to the container
COPY . .

# Build production app
RUN npm run build

# Start the service
CMD npm start