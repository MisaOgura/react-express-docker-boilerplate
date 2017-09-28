pipeline {
    agent { docker 'node:7-alpine' }
    environment {
        DISABLE_AUTH = 'true'
        DB_ENGINE    = 'sqlite'
    }
    stages {
        stage('Test') {
            steps {
                sh 'printenv'
            }
        }
    }
    post {
        always {
            echo 'This will always run'
        }
        success {
                    echo 'This will run only if success'
        }
        failure {
                    echo 'This will run only if failure'
        }
        unstable {
                    echo 'This will run only if the run was marked unstable'
        }
        changed {
                    echo 'This will run only if the state of the Pipeline has changed'
        }
    }
}
