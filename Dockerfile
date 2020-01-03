FROM ubuntu
RUN apt update && apt upgrade 
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_13.x |  bash - 
RUN apt-get install -y nodejs 
#RUN apt-get install git -y -for option 3
RUN apt-get install g++ build-essential -y
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
