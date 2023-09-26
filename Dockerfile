# Use a Node.js image with a specific version and Alpine Linux as the base image
FROM node:18.16.0-alpine3.16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json, package-lock.json, and yarn.lock to the container
COPY package*.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the rest of the project files into the container
COPY . ./

# Define the command to start the development server
CMD ["npm", "run", "dev"]