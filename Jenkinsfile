pipeline {
    agent any

    options {
        skipDefaultCheckout()
    }

    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Compose Deploy') {
            steps {
                script {
                    sh 'docker compose down -v'
                    sh 'docker compose up -d --build'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful. The React app is running on Nginx.'
        }
        failure {
            echo 'Deployment failed. Please check the Jenkins logs.'
        }
    }
}