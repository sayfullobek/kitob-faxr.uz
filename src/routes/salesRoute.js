const router = require('express').Router()
const { salesController } = require('../controller')
const upload = require('../middlewares/upload')
const { verifyUsersToken } = require('../config')

/**
 * @swagger
 * tags:
 *   name: Sales
 *   description: Aksiya (sotuv) API-lari
 */

/**
 * @swagger
 * /sales:
 *   get:
 *     summary: Barcha aksiyalarni olish
 *     tags: [Sales]
 *     responses:
 *       200:
 *         description: Aksiyalar ro‘yxati muvaffaqiyatli olindi
 */

/**
 * @swagger
 * /sales/{id}:
 *   get:
 *     summary: Bitta aksiyani olish
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Aksiya ID-si
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Aksiya muvaffaqiyatli olindi
 */

/**
 * @swagger
 * /sales:
 *   post:
 *     summary: Yangi aksiya yaratish
 *     tags: [Sales]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - link
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Chegirma haftaligi"
 *               link:
 *                 type: string
 *                 example: "https://example.com/sale1"
 *     responses:
 *       201:
 *         description: Aksiya muvaffaqiyatli yaratildi
 */

/**
 * @swagger
 * /sales/{id}:
 *   put:
 *     summary: Aksiyani yangilash
 *     tags: [Sales]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Aksiya ID-si
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               link:
 *                 type: string
 *     responses:
 *       200:
 *         description: Aksiya muvaffaqiyatli yangilandi
 */

/**
 * @swagger
 * /sales/{id}:
 *   delete:
 *     summary: Aksiyani o‘chirish
 *     tags: [Sales]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Aksiya muvaffaqiyatli o‘chirildi
 */

router.get('/', salesController.getAll)
router.get('/:id', salesController.getOne)
router.post('/', verifyUsersToken, upload.none(), salesController.create)
router.put('/:id', verifyUsersToken, upload.none(), salesController.update)
router.delete('/:id', verifyUsersToken, salesController.remove)

module.exports = router
