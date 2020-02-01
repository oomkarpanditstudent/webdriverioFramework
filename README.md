# webdriverioFramework
Webdriver Framework with JavaScript, Mocha & Chai.

	Dockerized- Docker Image is on Docker hub oomkar/wdio
	Dockerfile & Docker Compose implemented.
	Selenium GRID in Docker.
	CI Pipleline- Jenkinsfile 
	
-> If you would like to run the tests via Jenkins Pipeline:

1) Create a new pipeline from the repo using jenkinsfile. 
2) Ensure Jenkins Master/Node - where execution is to take place, have got docker and docker-compose installed.
3) After setting up a pipeline in jenkins- kick off the build. Jenkins file will take care of everything.

-> If you would like to run the test locally:

1) git clone https://github.com/oomkarpanditstudent/webdriverioFramework.git
2) npm install (in the folder with package.json)
3) npm test


Also implemented couple of variants for test execution:

1) Docker Service - For Chrome and Firefox using Docker
2) Selenium-Standalone Service
