# docker build -t sentiments-britecharts . && docker run -d --name sentiments-britecharts -e "WEBPORT=80" -e "REGURL=http://localhost:3000" -p 5005:80 sentiments-britecharts
# docker tag sentiments-britecharts suenot/sentiments-britecharts
# docker push suenot/sentiments-britecharts
#
FROM node:7.10-alpine
LABEL maintainer="Eugen Soloviov"
COPY server /server
COPY client /server/public
COPY register.json /server/register.json
WORKDIR /server
RUN npm install
CMD ["node","index.js"]