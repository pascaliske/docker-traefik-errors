#!/bin/sh
# -*- coding: utf-8 -*-

# set nginx port
sed -i "s/listen 80/listen ${NGINX_PORT}/g" /etc/nginx/conf.d/default.conf

exec "$@"
