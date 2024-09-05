const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const port = 3000;

// http://127.0.0.1:3000/chat => http://127.0.0.1:3001/
app.use('/chat-service', createProxyMiddleware({
  target: 'http://127.0.0.1:3001',
  pathRewrite: {
    '^/chat-service': '',
  }
}))

app.use('/feed-service', createProxyMiddleware({
  target: 'http://127.0.0.1:3002',
  pathRewrite: {
    '^/feed-service': '',
  }
}))

app.listen(port, () => {
  console.log(`API gateway service is running on port: ${port}`);
})
