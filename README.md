# webdriverioFramework
Webdriver Framework with JavaScript, Mocha & Chai.

	Dockerized- Docker Image is on Docker hub oomkar/wdio
	Dockerfile & Docker Compose implemented.
	Selenium GRID in Docker.
	CI Pipleline- Jenkinsfile 
	
-> If you would like to run this repo's test:

1) Create a new pipeline from the repo using jenkinsfile. 
2) Ensure Jenkins Master/Node - where execution is to take place, have got docker and docker-compose installed.
3) After setting up a pipeline in jenkins- kick off the build. Jenkins file will take care of everything.

Also implemented couple of variants for test execution:

1) Docker Service - For Chrome and Firefox using Docker
2) Selenium-Standalone Service
