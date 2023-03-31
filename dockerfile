FROM node:18.2.0-slim
 # Copy the source code from the current directory into the root of the container
COPY . .
RUN npm install
RUN npm run build
RUN npm run lint
 # expose the 3000 port
EXPOSE 3000
CMD ["npm", "start"]

# To build this image use the command 
# docker build . -t devops-project -f ./dockerfile

# Run: docker run -d -p 127.0.0.1:3000:3000 --name devops-project devops-project
