#Dev
# Command line: docker build -t hardhat-node . 
# Run: docker run --env-file .env -p 8545:8545 hardhat-node 

# Use an official node runtime as a parent image
FROM node:18.16-alpine3.18

ENV DOCKER=true

# Install git
RUN apk --no-cache add git

# Install Python
RUN apk add g++ make py3-pip

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN yarn

# Make port 8545 available to the world outside this container
EXPOSE 8545

# Copy the start script into the container
COPY start.sh /start.sh

# Set execute permissions for the script
RUN chmod +x /start.sh

# Use the script as the entrypoint
ENTRYPOINT ["/start.sh"]
