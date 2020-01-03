FROM ubuntu
RUN apt update && apt upgrade 
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_13.x |  bash - 
RUN apt-get install -y nodejs 
RUN node --version
WORKDIR /usr/source/app
