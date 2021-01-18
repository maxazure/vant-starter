# vue-starter


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



server {
        listen 80;
        listen [::]:80;
        server_name m.cdb99.com;
        index index.html index.htm;

        location / {
                root /home/ubuntu/sites/m.cdb99.com/frontend;
        }


        location /api/ {
        proxy_pass  http://127.0.0.1:5010/api/;
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS, PUT, DELETE';
    }
}

