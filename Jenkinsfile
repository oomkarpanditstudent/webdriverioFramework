pipeline { 
    agent any 
   
    stages {
        stage('Build') { 
            steps { 
                bat 'docker-compose up -d selenium-hub chrome-dbug firefox-dbug' 
            }
        }
        stage('Test'){
            steps {
               bat 'docker-compose up -d wdio-framework' 
            }
        }
        stage('Shutdown') {
            steps {
                bat 'docker-compose down' 
            }
        }
    }
}