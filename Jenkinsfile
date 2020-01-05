pipeline { 
    agent any 
   
    stages {
       stage('PRE BUILD - Clean up - docker') {
            steps {
                bat 'docker container prune -f'
                bat 'docker network prune -f' 
            }
        }
        stage('Docker base image- checking for latest') {
            steps {
                bat 'docker pull oomkar/ubuntu_node_git' 
            }
        }
        stage('Build - Set up GRID') { 
            steps { 
                bat 'docker-compose up -d selenium-hub chrome-dbug firefox-dbug' 
            }
        }
        stage('Test - Run Automated Tests'){
            steps {
               bat 'docker-compose up wdio-framework' 
            }
        }
        stage('Shutdown - Grid down') {
            steps {
                bat 'docker-compose down' 
            }
        }
         
    }
}