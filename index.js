const NodeCache = require('node-cache');
const fetch = require('node-fetch');
const tokensCache = new NodeCache();

module.exports = function(options) {
  Object.assign({cacheDuration: 300}, options);
  const {cacheDuration, url} = options;

  return async function (req, res, next) {
    const authorization = req.headers.authorization;
    if(authorization) {
      const token = authorization.split(' ').pop();

      if(!tokensCache.get(token)) {
        const response = await fetch(`${url}/token/status`, {
          method: 'POST',
          body: JSON.stringify({token: authorization.split(' ').pop()}),
          headers: { 'Content-Type': 'application/json' },
        });

        if(response.status === 200) {
          tokensCache.set(token, true, cacheDuration);
        }
      }

      if(tokensCache.get(token)) {
        next();
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  };
};