FROM node:10

# Set the working directory to /app
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install any needed packages specified in requirements.txt
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 8080

# Run app.py when the container launches
CMD ["npm", "start"]