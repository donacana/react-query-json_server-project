FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# 컨테이너 실행 시 빌드된 dist 폴더의 내용을 공유 볼륨으로 복사하고 종료합니다.
CMD ["cp", "-r", "dist/.", "/shared-build/"]