FROM ubuntu
RUN apt update && apt upgrade 
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_13.x |  bash - 
RUN apt-get install -y nodejs 
RUN apt-get install git -y
RUN apt-get install g++ build-essential -y
WORKDIR /usr/source/app
