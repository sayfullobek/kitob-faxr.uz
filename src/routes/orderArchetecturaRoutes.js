const router = require('express').Router()
const { orderArchetecturaController } = require('../controller')
const { verifyUsersToken } = require('../config')
const upload = require('../middlewares/upload')
/**
 * @swagger
 * tags:
 *   name: OrderArchetectura
 *   description: Arxitektura buyurtmalari bilan ishlash
 */
/**
 * @swagger
 * /order-archetectura:
 *   post:
 *     summary: Arxitektura buyurtmasi yaratish
 *     tags: [OrderArchetectura]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - photo
 *               - description
 *               - address
 *               - endDate
 *               - status
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Yangi arxitektura buyurtmasi"
 *               photo:
 *                 type: string
 *                 format: binary
 *               description:
 *                 type: string
 *                 example: "Bu yangi arxitektura buyurtmasi tavsifi"
 *               address:
 *                 type: string
 *                 example: "Toshkent, Amir Temur ko'chasi"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-12-31T23:59:59Z"
 *               status:
 *                 type: string
 *                 example: "active"
 */
router.post('/', upload.none(), orderArchetecturaController.create)
router.get('/', orderArchetecturaController.getAll)

module.exports = router
