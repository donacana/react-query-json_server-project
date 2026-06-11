pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Compose Deploy') {
            steps {
                script {
                    // 기존 컨테이너 중지 및 볼륨 초기화 후 새롭게 빌드 및 실행
                    sh 'docker compose down -v'
                    sh 'docker-compose up -d --build'
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