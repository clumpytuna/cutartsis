FROM nginx
COPY dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# load ngx_http_image_filter_module
# https://stackoverflow.com/questions/40574866/docker-nginx-ngx-http-image-filter-module
RUN echo 'load_module /etc/nginx/modules/ngx_http_image_filter_module.so;' | cat - /etc/nginx/nginx.conf > temp && mv temp /etc/nginx/nginx.conf