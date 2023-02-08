const {Router} = require('express');
const db = require("../data");
const {getCustomers, postCustomer, putCustomer, deleteCustomer} = require("../controllers/customer");

const router = Router();

router.get('/', getCustomers);
router.post('/', postCustomer);
router.put('/:id', putCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
