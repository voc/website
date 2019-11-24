FROM archlinux:latest as build-webserver

RUN pacman -Sy && pacman -S --noconfirm gcc make glibc wget gnupg openssl mbedtls

WORKDIR /usr/local/src
RUN wget https://www.fefe.de/gatling/gatling-0.15.tar.xz \
    && wget https://www.fefe.de/gatling/gatling-0.15.tar.xz.sig \
    && wget https://www.fefe.de/libowfat/libowfat-0.32.tar.xz \
    && wget https://www.fefe.de/libowfat/libowfat-0.32.tar.xz.sig \
    && wget https://dl.fefe.de/felix@fefe.de.asc \
    && gpg --import felix@fefe.de.asc \
    && gpg --verify gatling-0.15.tar.xz.sig gatling-0.15.tar.xz \
    && gpg --verify libowfat-0.32.tar.xz.sig libowfat-0.32.tar.xz \
    && tar xf gatling-0.15.tar.xz \
    && tar xf libowfat-0.32.tar.xz \
    && cd libowfat-0.32 \
    && make && make install \
    && cd ../gatling-0.15 && make && make install
RUN pacman -Sc --noconfirm


FROM ruby:2.6.5-alpine3.10 as build-website
RUN gem install bundler \
    && apk -U add gcc make libc-dev

Add . /website

WORKDIR /website
RUN bundle install
RUN nanoc compile


FROM archlinux:latest
RUN groupadd -r webserver \
    && useradd -d /webserver -s /bin/false -M -g webserver webserver

# from build
COPY --from=build-webserver /opt /opt
COPY --from=build-website /website/output /webserver
RUN chown -R root:webserver /webserver


USER webserver
WORKDIR /webserver
EXPOSE 8000

# Run webserver
CMD [ "/opt/diet/bin/gatling", "-F", "-S", "-D", "-V", "-n" ]
