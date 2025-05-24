// admins.controller.js
const { adminService } = require('../service')
const jwt = require('jsonwebtoken')
const { Admins } = require('../models')
const CryptoJS = require('crypto-js')

const generateToken = id => {
	return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' })
}

exports.register = async (req, res) => {
	try {
		const admin = await adminService.createAdmin(req.body)
		const token = generateToken(admin._id)
		res.status(201).json({
			message: 'Admin yaratildi',
			admin: {
				id: admin._id,
				firstName: admin.firstName,
				lastName: admin.lastName,
				phoneNumber: admin.phoneNumber,
				role: admin.role,
			},
			token,
		})
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.login = async (req, res) => {
	try {
		const { phoneNumber, password } = req.body
		const admins = await Admins.findOne({ phoneNumber })
		if (!admins) {
			return res.status(401).json({
				message: 'Telefon raqam yoki parolingizda xatolik',
			})
		}
		const decryptedPass = CryptoJS.AES.decrypt(
			admins.password,
			process.env.PASSWORD_SECRET_KEY
		).toString(CryptoJS.enc.Utf8)
		if (decryptedPass !== password) {
			return res.status(401).json({
				message: 'Telefon raqam yoki parolingizda xatolik',
			})
		}
		const token = jwt.sign({ id: admins._id }, process.env.JWT_SECRET_KEY)
		admins.password = undefined
		return res.status(200).json({
			message: 'Xisobingizga muvaffaqiyatli kirdingiz',
			token,
		})
	} catch (err) {
		res.status(500).json({
			message: err.message,
		})
	}
}

exports.getAll = async (req, res) => {
	try {
		const admins = await adminService.getAdmins()
		res.json(admins)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.getOne = async (req, res) => {
	try {
		const admin = await adminService.getAdminById(req.params.id)
		if (!admin) return res.status(404).json({ message: 'Topilmadi' })
		res.json(admin)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.update = async (req, res) => {
	try {
		const admin = await adminService.updateAdmin(req.params.id, req.body)
		if (!admin) return res.status(404).json({ message: 'Topilmadi' })
		res.json(admin)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.remove = async (req, res) => {
	try {
		const result = await adminService.deleteAdmin(req.params.id)
		if (!result) return res.status(404).json({ message: 'Topilmadi' })
		res.json({ message: "Admin o'chirildi" })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}
