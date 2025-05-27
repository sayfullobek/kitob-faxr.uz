const router = require('express').Router()
const { allData } = require('../controller')

/**
 * @swagger
 * tags:
 *   name: AllData
 *   description: Barcha ma'lumotlarni olish
 */
/**
 * @swagger
 * /all-data:
 *   get:
 *     summary: Barcha ma'lumotlarni olish
 *     tags: [AllData]
 *     responses:
 *       200:
 *         description: Barcha ma'lumotlar muvaffaqiyatli olindi
 */
router.get('/', allData.getAll)

module.exports = router
