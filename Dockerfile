# Base image
FROM node:20.1-alpine3.16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port 3000 (assuming your app runs on port 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
