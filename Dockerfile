FROM node:6.9.1

ENV TERM xterm

RUN apt-get update
RUN apt-get -y install nano htop
RUN mkdir /bot
