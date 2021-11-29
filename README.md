### POC - how to get commit hash via API
This is simple POC with checking git commit hash.  
Such approach can be useful to find out exact code state if other approaches failed.  

### Check deployment here:
https://api-commithash-poc.herokuapp.com/

### How to reproduce via CI:
1. Create Heroku account
2. Update configs in .github/workflows/deploy.yml
3. Create a commit to master branch

### How to launch locally:
1. Create `.env` file with `COMMIT_SHA` variable.
2. Execute command `yarn`.
3. Execute command `node app.js`

### Security:
1. Probably it will be enough to use this approach on `dev`/`stg` environments only if we don't want to show it in `production`.