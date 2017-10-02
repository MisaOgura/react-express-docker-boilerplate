pipeline {
    agent any
    options {
        ansiColor('xterm')
        timestamps()
        timeout(time: 1, unit: 'HOURS')
    }
    environment {
        TEST_ENV = 'test env on Jenkins'
    }
    stages {
        stage ("Test") {
            steps {
                slackSend "Started ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
                sh 'echo "Printing environmental variables..."'
                sh 'printenv'
                sh 'echo "Installing dependencies..."'
                sh 'yarn install'
                sh 'echo "Running unit tests..."'
                sh 'yarn test'
            }
        }
    }
    post {
        always {
            echo 'Finished running the job.'
            deleteDir()
        }
        success {
            echo "Job status: Success! :D"
            slackSend   color: 'good',
                        message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
        }
        failure {
            echo "Job status: Failure... :("
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