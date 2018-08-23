# authmagic-timerange-stateless-express-middleware
Middleware for express framework which works with timerange-stateless core

<img src="https://github.com/authmagic/authmagic/blob/master/docs/images/logo.png?raw=true" width="300px"/>

authmagic-timerange-stateless-express-middleware
========================
<a href="https://github.com/authmagic/authmagic">authmagic</a> middleware for <a href="https://github.com/expressjs/express">express.js</a> which works with <a href="authmagic-timerange-stateless-core">timerange-stateless core</a>.

How to install and add
-----------
```
npm i --save authmagic-timerange-stateless-express-middleware
```

```
const timerangeAuthMiddleware = require('authmagic-timerange-stateless-express-middleware');
...
const app = express();

app.use(cors());
// authmagicUrl - url to reach your authmagic server
app.use(timerangeAuthMiddleware({url: authmagicUrl}));
```

Licence
-----------
authmagic-timerange-stateless-core is [MIT licensed](./LICENSE).
