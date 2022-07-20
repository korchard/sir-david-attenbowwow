# pull base image
FROM node:16.2.0

# make and set working directory.
RUN mkdir -p /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
RUN npm install

# add app
COPY . /app

# expose port
EXPOSE 5000

# start app
CMD ["npm", "run", "start"]


