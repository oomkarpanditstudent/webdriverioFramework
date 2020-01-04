pipeline { 
            agent {
                docker {
                    image 'oomkar/node-slim'
                    args '-v $HOME/temppipe:/root/temppipe'
                }
            }
          
            stages {
                stage('Get code and dependencies'){
                   steps {
                        sh 'npm install'
            }
        }
    }  
}