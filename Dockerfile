FROM golang:alpine as builder
COPY . /tmp/syncd
ENV MIRROR_URL http://mirrors.ustc.edu.cn/alpine/
# Install build deps
RUN echo '' > /etc/apk/repositories && \
	echo "${MIRROR_URL}v3.3//main"     >> /etc/apk/repositories && \
  	echo "${MIRROR_URL}v3.3//community" >> /etc/apk/repositories && \
	apk update && apk add --no-cache make go && \
	cd /tmp/syncd && make

FROM alpine:latest
LABEL maintainer "The Prometheus Authors <https://github.com/dreamans>"
COPY ./syncd.ini /etc/syncd.ini
ENV MIRROR_URL http://mirrors.ustc.edu.cn/alpine/
ENV LANG C.UTF-8
RUN echo '' > /etc/apk/repositories && \
	echo "${MIRROR_URL}v3.3//main"     >> /etc/apk/repositories && \
  	echo "${MIRROR_URL}v3.3//community" >> /etc/apk/repositories && \
	apk update && apk add --no-cache git openssh bash && \
	ssh-keygen -t rsa -P "" -f /root/.ssh/id_rsa && \
	cat ~/.ssh/id_rsa.pub
WORKDIR /syncd
COPY --from=builder /tmp/syncd/output/ . 
EXPOSE 8878
CMD ["/syncd/bin/syncd", "-c", "/etc/syncd.ini"]
