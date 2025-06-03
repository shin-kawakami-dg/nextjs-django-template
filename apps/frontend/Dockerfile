FROM mcr.microsoft.com/playwright:v1.52.0-noble

# ロケールとエンコード　locale and encoding
RUN apt-get update && apt-get install -y \
  locales \
  fonts-ipafont-gothic \
  fonts-ipafont-mincho \
  && locale-gen ja_JP.UTF-8 \
  && dpkg-reconfigure locales \
  && echo "export LANG=ja_JP.UTF-8" >> ~/.bashrc

# ロケールとエンコーディングの設定
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .