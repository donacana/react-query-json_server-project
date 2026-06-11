이미지 빌드
docker build -t my-jenkins .

컨테이너 실행(리눅스용)
docker run -d \
  --name jenkins \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  --restart unless-stopped \
  my-jenkins

  (윈도우용)
  docker run -d --name jenkins -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home --restart unless-stopped jenkins/jenkins:lts-jdk21

아이디 TNDKA
비밀번호 QWERT12345

윈도우 캐시 삭제후 다시 서버 만들기 코드
docker rm -f jenkins

docker rmi -f my-jenkins

docker volume rm jenkins_home

docker builder prune -af

docker system prune -af

docker build --no-cache -t my-jenkins .

여기서부터 코드확인
docker run -d --name jenkins -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --restart unless-stopped my-jenkins
비밀번호 확인
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
