
FROM node:14.20.1

WORKDIR /code

COPY . /code

ARG URL

ARG AIURL

ARG PASS_SECRET_KEY

ARG ENCODED_SECRET_KEY

ENV URL ${URL}

ENV AIURL ${AIURL}

ENV PASS_SECRET_KEY ${PASS_SECRET_KEY}

ENV ENCODED_SECRET_KEY ${ENCODED_SECRET_KEY}

RUN npm install

EXPOSE 3000

CMD [ "node", "start.js" ]

