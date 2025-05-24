const router = require('express').Router()
const { projectController } = require('../controller')
const upload = require('../middlewares/upload')
const { verifyUsersToken } = require('../config')

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Loyiha API-lari
 */

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Barcha loyihalarni olish
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Loyiha ro'yxati muvaffaqiyatli olindi
 */

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Bitta loyihani olish
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Loyiha ID-si
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Loyiha muvaffaqiyatli olindi
 */

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Yangi loyiha yaratish
 *     tags: [Projects]
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
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Yangi turar joy"
 *               photo:
 *                 type: string
 *                 format: binary
 *               description:
 *                 type: string
 *                 example: "Juda chiroyli loyiha"
 *               address:
 *                 type: string
 *                 example: "Toshkent, Chilonzor"
 *               endDate:
 *                 type: string
 *                 example: "2025-12-31"
 *               projectType:
 *                 type: string
 *                 enum: [Biznes, Premium]
 *               status:
 *                 type: string
 *                 enum: ["Eng so'ngi xonadonlar", "Barcha xonadonlar sotilgan", "Sotuvda bor", "Tez orada"]
 *     responses:
 *       201:
 *         description: Loyiha muvaffaqiyatli yaratildi
 */

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Loyihani yangilash
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *                 format: binary
 *               description:
 *                 type: string
 *               address:
 *                 type: string
 *               endDate:
 *                 type: string
 *               projectType:
 *                 type: string
 *                 enum: [Biznes, Premium]
 *               status:
 *                 type: string
 *                 enum: ["Eng so'ngi xonadonlar", "Barcha xonadonlar sotilgan", "Sotuvda bor", "Tez orada"]
 *     responses:
 *       200:
 *         description: Loyiha muvaffaqiyatli yangilandi
 */

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Loyihani o‘chirish
 *     tags: [Projects]
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
 *         description: Loyiha muvaffaqiyatli o‘chirildi
 */

router.get('/', projectController.getAll)
router.get('/:id', projectController.getOne)
router.post(
	'/',
	verifyUsersToken,
	upload.single('photo'),
	projectController.create
)
router.put(
	'/:id',
	verifyUsersToken,
	upload.single('photo'),
	projectController.update
)
router.delete('/:id', verifyUsersToken, projectController.remove)

module.exports = router
