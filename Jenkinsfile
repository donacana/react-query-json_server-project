pipeline {
    agent any

    // 자동 체크아웃 기능을 끄는 옵션 추가
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

        // ... (이하 Docker Compose Deploy 단계 동일) ...