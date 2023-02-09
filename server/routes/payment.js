const {Router} = require('express');
const {getPayments, getPaymentByCustomer,getPaymentsByCredit, getPaymentById, postPayment, putPayment, deletePayment} = require("../controllers/payment");
const {validateToken} = require("../helpers/jwt");

const router = Router();

router.get('/', validateToken, getPayments);
router.get('/:id', getPaymentById);
router.get('/customer/:customer_id', getPaymentByCustomer);
router.get('/credit/:credit_id', getPaymentsByCredit);
router.post('/', postPayment);
router.put('/:id', putPayment);
router.delete('/:id', deletePayment);

module.exports = router;
