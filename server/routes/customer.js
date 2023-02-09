const {Router} = require('express');
const {getCustomers, postCustomer, putCustomer, deleteCustomer} = require("../controllers/customer");
const {validateToken} = require("../helpers/jwt");

const router = Router();

router.get('/', getCustomers);
router.post('/', postCustomer);
router.put('/:id', putCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
