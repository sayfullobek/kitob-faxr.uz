const express = require('express')
const router = express.Router()

router.use('/auth', require('./adminRoute'))
router.use('/sales', require('./salesRoute'))
router.use('/news', require('./newsRoute'))
router.use('/subNews', require('./subNewsRoute'))
router.use('/projects', require('./projectRoute'))
router.use('/archetecturas', require('./archetecturasRoute'))
router.use('/order', require('./orderArchetecturaRoutes'))
router.use('/all-data', require('./AllData'))

module.exports = router
