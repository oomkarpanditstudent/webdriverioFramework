pipeline {
    agent any
    stages {
        stage('Build Node') {
            agent {
                docker {
                    image 'oomkar/node-slim'
                }
            }
            steps {
                sh 'git clone https://github.com/oomkarpanditstudent/webdriverioFramework.git'
                sh 'cd webdriverioframework'
                sh 'npm install'
            }
        }
        stage('Build Image') {
            steps {
                script {
                	app = docker.build("oomkar/node-wdio-docker")
                }
            }
        }
        stage('Push Image') {
            steps {
                script {
			        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
			        	app.push("${BUILD_NUMBER}")
			            app.push("latest")
			        }
                }
            }
        }
    }
}