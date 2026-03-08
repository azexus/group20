# Use the official Node.js image as the base image
# We use the 'alpine' variant for a smaller image size
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json to the working directory
# Copy package*lock.json here in future.
COPY package*.json ./

# Install project dependencies
# Since there aren't any of those pesky dependencies yet, this won't do much
# but it's a good practice to include it.
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the app runs on (matching the PORT in index.js)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
