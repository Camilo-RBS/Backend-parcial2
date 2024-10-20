const express = require('express');
const { getUsersList, createUser } = require('../controllers/user.Controlle');

const router = express.Router();

router.get('/api/users', getUsersList);
router.post('/api/users', createUser);

module.exports = router;
