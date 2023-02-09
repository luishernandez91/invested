const {Router} = require('express');
const {getCredits, getCreditsByCustomer, postCredit, putCredit, deleteCredit} = require("../controllers/credit");
const {validateToken} = require("../helpers/jwt");

const router = Router();

router.get('/', getCredits);
router.get('/:customer_id', validateToken, getCreditsByCustomer);
router.post('/', postCredit);
router.put('/:id', putCredit);
router.delete('/:id', deleteCredit);

module.exports = router;
