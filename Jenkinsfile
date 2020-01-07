pipeline { 
    agent any 
   
    stages {
         
        stage('Build Image') {
            steps {
                bat 'docker build -t oomkar/wdio . '
            }
        }
        stage('Push Image') {
            steps {
			        bat 'docker push oomkar/wdio:latest'
			    }                           
            }
        
        stage('Docker base image- checking for latest') {
            steps {
                bat 'docker pull oomkar/wdio' 
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