FROM httpd
WORKDIR /usr/local/apache2/htdocs
COPY ./index.html .
COPY ./js ./js
COPY ./css ./css