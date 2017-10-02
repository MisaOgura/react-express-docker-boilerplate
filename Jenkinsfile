pipeline {
    agent { docker 'node:8-slim' }
    environment {
        TEST_ENV = 'test env on Jenkins'
    }
    stages {
        stage ("Test") {
            steps {
                checkout scm

                wrap([$class: “AnsiColorBuildWrapper”]) {
                    sh "npm install"
                    sh "npm run test"
                }
            }
        }
    }
    post {
        always {
            echo 'Finished running the job with a status below:'
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