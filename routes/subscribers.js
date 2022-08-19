var express = require('express');
var router = express.Router();
var subscriberController= require('../controllers/subscribers');
/* GET subscribers listing. */
router.get('/', subscriberController.subscriberForm);
router.post('/create',subscriberController.createData);
router.get('/list',subscriberController.fetchData);
router.get('/edit/:id',subscriberController.editData);
router.post('/edit/:id',subscriberController.updateData);
router.get('/delete/:id',subscriberController.deleteData);
module.exports = router;
