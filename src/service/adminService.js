// admins.service.js
const { Admins } = require('../models')
const bcrypt = require('bcryptjs')
const CryptoJS = require('crypto-js')

const createAdmin = async data => {
	const existing = await Admins.findOne({ phoneNumber: data.phoneNumber })
	if (existing) throw new Error('Bu telefon raqami allaqachon mavjud')
	return await Admins.create(data)
}

// const loginAdmin = async (phoneNumber, password) => {
// 	const admins = await Admins.findOne({ phoneNumber })
// 	if (!admins) {
// 		throw new Error('Telefon raqam yoki parolingizda xatolik')
// 	}
// 	const decryptedPass = CryptoJS.AES.decrypt(
// 		admins.password,
// 		process.env.PASSWORD_SECRET_KEY
// 	).toString(CryptoJS.enc.Utf8)
// 	if (decryptedPass !== password) {
// 		throw new Error('Telefon raqam yoki parolingizda xatolik')
// 	}
// 	return admins
// }

const getAdmins = async () => {
	return await Admins.find().select('-password')
}

const getAdminById = async id => {
	return await Admins.findById(id).select('-password')
}

const updateAdmin = async (id, data) => {
	if (data.password) {
		data.password = await bcrypt.hash(data.password, 10)
	}
	return await Admins.findByIdAndUpdate(id, data, {
		new: true,
		runValidators: true,
	}).select('-password')
}

const deleteAdmin = async id => {
	return await Admins.findByIdAndDelete(id)
}

module.exports = {
	createAdmin,
	// loginAdmin,
	getAdmins,
	getAdminById,
	updateAdmin,
	deleteAdmin,
}
