const router = require('express').Router()
const { newsController } = require('../controller')
const upload = require('../middlewares/upload')
const { verifyUsersToken } = require('../config')

/**
 * @swagger
 * tags:
 *   name: News
 *   description: Yangiliklar bilan ishlash
 */

/**
 * @swagger
 * /news:
 *   get:
 *     summary: Barcha yangiliklarni olish
 *     tags: [News]
 *     responses:
 *       200:
 *         description: Barcha yangiliklar muvaffaqiyatli olindi
 */

/**
 * @swagger
 * /news/{id}:
 *   get:
 *     summary: Bitta yangilikni olish
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Yangilik ID raqami
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Yangilik topildi
 */

/**
 * @swagger
 * /news:
 *   post:
 *     summary: Yangi yangilik qo‘shish
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Yangi loyiha boshlandi"
 *     responses:
 *       201:
 *         description: Yangilik muvaffaqiyatli qo‘shildi
 */

/**
 * @swagger
 * /news/{id}:
 *   put:
 *     summary: Yangilikni yangilash
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Yangilik ID raqami
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
 *     responses:
 *       200:
 *         description: Yangilik muvaffaqiyatli yangilandi
 */

/**
 * @swagger
 * /news/{id}:
 *   delete:
 *     summary: Yangilikni o‘chirish
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Yangilik ID raqami
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Yangilik muvaffaqiyatli o‘chirildi
 */

router.get('/', newsController.getAll)
router.get('/all', newsController.getAllAndSub)
router.get('/:id', newsController.getOne)
router.post('/', verifyUsersToken, upload.none(), newsController.create)
router.put('/:id', verifyUsersToken, upload.none(), newsController.update)
router.delete('/:id', verifyUsersToken, newsController.remove)

module.exports = router
