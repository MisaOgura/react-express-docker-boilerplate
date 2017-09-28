pipeline {
    agent { docker 'node:8-slim' }
    environment {
        TEST_ENV = 'test env on Jenkins'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'echo "Printing environmental variables..."'
                sh 'printenv'
                sh 'echo "Installing yarn..."'
                sh 'yarn install'
                sh 'echo "Running unit tests..."'
                sh 'yarn test'
            }
        }
    }
    post {
        always {
            echo 'Finished running the job with a status below:'
            deleteDir()
        }
        success {
            echo 'Job status: Success! :D'
        }
        failure {
            echo 'Job status: Failure... :('
        }
        unstable {
            echo 'Job status: Unstable :/'
        }
        changed {
            echo 'A change has been detected in the job status.'
        }
    }
}
