pipeline {
    agent any
    
    environment {
        NODE_VERSION = '20'
        npm_config_cache = 'npm-cache'
    }
    
    tools {
        nodejs "${NODE_VERSION}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm ci'
                }
            }
        }
        
        stage('Lint') {
            steps {
                script {
                    sh 'npm run lint || echo "Linting completed with warnings"'
                }
            }
            post {
                always {
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'reports',
                        reportFiles: 'eslint-report.html',
                        reportName: 'ESLint Report'
                    ])
                }
            }
        }
        
        stage('Test') {
            parallel {
                stage('Jasmine Tests') {
                    steps {
                        script {
                            sh 'npm run test:jasmine'
                        }
                    }
                }
                
                stage('Cucumber Tests') {
                    steps {
                        script {
                            sh 'npm run test:cucumber'
                        }
                    }
                }
            }
        }
        
        stage('Generate Reports') {
            steps {
                script {
                    sh 'npm run test:cucumber:report'
                }
            }
            post {
                always {
                    // Archive test artifacts
                    archiveArtifacts artifacts: 'reports/**/*', fingerprint: true
                    
                    // Publish HTML reports
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'reports',
                        reportFiles: 'cucumber-report.html',
                        reportName: 'Cucumber Test Report'
                    ])
                }
            }
        }
        
        stage('Deploy Reports') {
            when {
                branch 'main'
            }
            steps {
                script {
                    // Deploy to web server or artifact repository
                    sh '''
                        echo "Deploying test reports..."
                        # Add your deployment script here
                        # Example: rsync -avz reports/ user@server:/var/www/test-reports/
                    '''
                }
            }
        }
    }
    
    post {
        always {
            // Clean workspace
            cleanWs()
        }
        
        success {
            echo 'Pipeline completed successfully!'
            // Send notification on success
        }
        
        failure {
            echo 'Pipeline failed!'
            // Send notification on failure
        }
    }
}
