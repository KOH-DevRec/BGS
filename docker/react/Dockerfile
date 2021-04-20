### docker build -t react_dev:beta .
FROM ubuntu:20.04

LABEL Auther="Ryotaro Hoshi"
LABEL Email="g231s029@s.iwate-pu.ac.jp"
LABEL Description="Docker image for react dev env"

ENV TZ Asia/Tokyo

RUN set -x && \
    apt update && \
    apt upgrade -y && \
    apt install tzdata

## react 開発環境の整備 nodejs ver 12lts
# gitとcurlの設定
RUN apt-get install -y git curl gcc g++ make gnupg && \
    curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs && \
    curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

## ポートの開放
# reactアプリ表示用
EXPOSE 30000

CMD /bin/bash


