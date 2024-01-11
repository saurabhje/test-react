const Express = require('express');
const app = Express();
const router =  require('./route');
const cors = require('cors')
app.use(cors({ origin: true }));
app.use(Express.json());
app.use('/', router);
app.listen(5000, () => {
    console.log("server running");
})
