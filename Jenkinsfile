pipeline {
    agent { docker 'node:8-slim' }
    stages {
        stage('Test') {
            steps {
                sh 'echo "Fail!"; exit 1'
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
