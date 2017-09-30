pipeline {
    agent { docker 'node:8-slim' }
    environment {
        TEST_ENV = 'test env on Jenkins'
    }
    stages {
        stage('Test') {
            steps {
                slackSend "Started ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
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
            ansiColor('xterm') {
                echo '\e[100mJob status:\e[0m \e[92mSuccess! :D'
            }
            slackSend   color: 'good',
                        message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
        }
        failure {
            ansiColor('xterm') {
                echo '\e[100mJob status:\e[0m \e[91mFailure... :('
            }
            slackSend   color: 'danger',
                        message: "The pipeline ${currentBuild.fullDisplayName} failed."
        }
        unstable {
            echo 'Job status: Unstable :/'
            slackSend   color: 'warning',
                        message: "The pipeline ${currentBuild.fullDisplayName} is unstable."
        }
        changed {
            echo 'A change has been detected in the job status.'
        }
    }
}
