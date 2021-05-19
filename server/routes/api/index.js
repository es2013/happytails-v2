const router = require('express').Router();
const userRoutes = require('./user-routes');
const adminRoutes = require('./admin-routes')

router.use('/users', userRoutes);
routeer.use('/admin', adminRoutes);

module.exports = router;