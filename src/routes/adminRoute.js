const router = require('express').Router()
const { adminController } = require('../controller')
const upload = require('../middlewares/upload')
const { verifyUsersToken } = require('../config')

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: Adminlar bilan ishlovchi API
 */

/**
 * @swagger
 * /admins/register:
 *   post:
 *     summary: Yangi adminni ro'yxatdan o'tkazish
 *     tags: [Admins]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - phoneNumber
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *                 example: "+998901234567"
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin yaratildi
 *       400:
 *         description: Xatolik yuz berdi
 */
router.post(
	'/register',
	verifyUsersToken,
	upload.none(''),
	adminController.register
)

/**
 * @swagger
 * /admins/login:
 *   post:
 *     summary: Admin login qilish
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - phoneNumber
 *               - password
 *             properties:
 *               phoneNumber:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli login
 *       400:
 *         description: Login ma'lumotlari noto'g'ri
 */
router.post('/login', upload.none(''), adminController.login)

/**
 * @swagger
 * /admins:
 *   get:
 *     summary: Barcha adminlarni olish
 *     tags: [Admins]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Adminlar ro'yxati
 */
router.get('/', verifyUsersToken, adminController.getAll)

/**
 * @swagger
 * /admins/{id}:
 *   get:
 *     summary: Bitta adminni olish
 *     tags: [Admins]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Admin ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topilgan admin
 *       404:
 *         description: Admin topilmadi
 */
router.get('/get-me/:id', verifyUsersToken, adminController.getOne)

/**
 * @swagger
 * /admins/{id}:
 *   put:
 *     summary: Adminni tahrirlash
 *     tags: [Admins]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Admin ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin yangilandi
 *       404:
 *         description: Admin topilmadi
 */
router.put('/:id', verifyUsersToken, upload.none(''), adminController.update)

/**
 * @swagger
 * /admins/{id}:
 *   delete:
 *     summary: Adminni o'chirish
 *     tags: [Admins]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Admin ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Admin o'chirildi
 *       404:
 *         description: Admin topilmadi
 */
router.delete('/:id', verifyUsersToken, adminController.remove)

module.exports = router
