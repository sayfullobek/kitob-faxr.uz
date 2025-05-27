const router = require('express').Router()
const { archetecturasController } = require('../controller')
const upload = require('../middlewares/upload')
const { verifyUsersToken } = require('../config')

/**
 * @swagger
 * tags:
 *   name: Archetecturas
 *   description: Kvartiralar bilan ishlash
 */

/**
 * @swagger
 * /archetecturas:
 *   get:
 *     summary: Barcha kvartiralarni olish
 *     tags: [Archetecturas]
 *     responses:
 *       200:
 *         description: Barcha kvartiralar muvaffaqiyatli olindi
 */

/**
 * @swagger
 * /archetecturas/{id}:
 *   get:
 *     summary: Bitta kvartirani olish
 *     tags: [Archetecturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Kvartira ID raqami
 *     responses:
 *       200:
 *         description: Kvartira topildi
 */

/**
 * @swagger
 * /archetecturas:
 *   post:
 *     summary: Yangi kvartira qo‘shish
 *     tags: [Archetecturas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               kvartiraNumber:
 *                 type: number
 *               maydon:
 *                 type: number
 *               xonalar:
 *                 type: number
 *               qavat:
 *                 type: number
 *               endDate:
 *                 type: string
 *                 format: date
 *               seksiya:
 *                 type: number
 *               navbat:
 *                 type: number
 *               soldOut:
 *                 type: boolean
 *               projects:
 *                 type: string
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Kvartira muvaffaqiyatli qo‘shildi
 */

/**
 * @swagger
 * /archetecturas/{id}:
 *   put:
 *     summary: Kvartirani yangilash
 *     tags: [Archetecturas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Kvartira ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               kvartiraNumber:
 *                 type: number
 *               maydon:
 *                 type: number
 *               xonalar:
 *                 type: number
 *               qavat:
 *                 type: number
 *               endDate:
 *                 type: string
 *                 format: date
 *               seksiya:
 *                 type: number
 *               navbat:
 *                 type: number
 *               soldOut:
 *                 type: boolean
 *               projects:
 *                 type: string
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Kvartira muvaffaqiyatli yangilandi
 */

/**
 * @swagger
 * /archetecturas/{id}:
 *   delete:
 *     summary: Kvartirani o‘chirish
 *     tags: [Archetecturas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Kvartira ID raqami
 *     responses:
 *       200:
 *         description: Kvartira o‘chirildi
 */

router.get('/', archetecturasController.getAll)
router.get('/all', archetecturasController.getAllArchetectura)
router.get('/:id', archetecturasController.getOne)
router.get('/project/:id', archetecturasController.getProjects)
router.post(
	'/',
	verifyUsersToken,
	upload.single('photo'),
	archetecturasController.create
)
router.put(
	'/:id',
	verifyUsersToken,
	upload.single('photo'),
	archetecturasController.update
)
router.put(
	'/soldOut/:id',
	verifyUsersToken,
	upload.none(''),
	archetecturasController.updateSoldOut
)
router.delete('/:id', verifyUsersToken, archetecturasController.remove)

module.exports = router
