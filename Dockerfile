# Base image
FROM node:12.2.0-alpine

# Set working directory
RUN mkdir -p /usr/src/task-manager
WORKDIR /usr/src/task-manager

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/task-manager/node_modules/.bin:$PATH

# Install and cache app dependencies
COPY ./package.json /usr/src/task-manager/

RUN npm install -g yarn
RUN yarn run --silent
RUN yarn add react-scripts@3.4.0 -g run --silent

# Start app
CMD [ "npm", "run", "start"]
