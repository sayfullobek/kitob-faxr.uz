const router = require('express').Router()
const { subNewsController } = require('../controller')
const upload = require('../middlewares/upload')
const { verifyUsersToken } = require('../config')

/**
 * @swagger
 * tags:
 *   name: SubNews
 *   description: Yangilik detallari (SubNews) API-lari
 */

/**
 * @swagger
 * /subNews:
 *   get:
 *     summary: Barcha sub-yangiliklarni olish
 *     tags: [SubNews]
 *     responses:
 *       200:
 *         description: SubNews ro'yxati olindi
 */

/**
 * @swagger
 * /subNews/{id}:
 *   get:
 *     summary: Bitta sub-yangilikni olish
 *     tags: [SubNews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: SubNews ID-si
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: SubNews muvaffaqiyatli olindi
 */

/**
 * @swagger
 * /subNews:
 *   post:
 *     summary: Yangi sub-yangilik yaratish
 *     tags: [SubNews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - photo
 *               - description
 *               - news
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *               description:
 *                 type: string
 *               news:
 *                 type: string
 *     responses:
 *       201:
 *         description: SubNews muvaffaqiyatli yaratildi
 */

/**
 * @swagger
 * /subNews/{id}:
 *   put:
 *     summary: Sub-yangilikni yangilash
 *     tags: [SubNews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: SubNews ID
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *               description:
 *                 type: string
 *               news:
 *                 type: string
 *     responses:
 *       200:
 *         description: SubNews muvaffaqiyatli yangilandi
 */

/**
 * @swagger
 * /subNews/{id}:
 *   delete:
 *     summary: Sub-yangilikni o‘chirish
 *     tags: [SubNews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: SubNews ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: SubNews muvaffaqiyatli o‘chirildi
 */

router.get('/', subNewsController.getAll)
router.get('/all', subNewsController.getAllUser)
router.get('/:id', subNewsController.getOne)
router.get('/news/:id', subNewsController.getAllByNewsId)
router.post(
	'/',
	verifyUsersToken,
	upload.single('photo'),
	subNewsController.create
)
router.put(
	'/:id',
	verifyUsersToken,
	upload.single('photo'),
	subNewsController.update
)
router.delete('/:id', verifyUsersToken, subNewsController.remove)

module.exports = router
