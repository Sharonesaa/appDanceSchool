"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.deactivateUserController = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const userService_1 = require("../services/userService");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
exports.createUser = [
    upload.single('profilePicture'),
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userData = req.body;
            let profilePicture = req.file ? req.file.path : '';
            if (profilePicture.startsWith('src/')) {
                profilePicture = profilePicture.replace('src/', '');
            }
            console.log(profilePicture);
            userData.profilePicture = profilePicture; // Almacenar el path de la imagen
            const newUser = yield (0, userService_1.createUserService)(userData);
            res.status(201).json({
                message: 'User created successfully',
                user: newUser
            });
        }
        catch (error) {
            res.status(400).json({ message: 'Error creating user', error });
            console.error('Error during transaction:', error);
        }
    })
];
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getUsersService)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id, 10);
        if (isNaN(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }
        const user = yield (0, userService_1.getUserByIdService)(userId);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
});
exports.getUserById = getUserById;
const deactivateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    try {
        const updatedUser = yield (0, userService_1.deactivateUserService)(userId);
        return res.status(200).json(updatedUser);
    }
    catch (error) {
        return res.status(404).json({ message: error });
    }
});
exports.deactivateUserController = deactivateUserController;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield (0, userService_1.loginUserService)(username, password);
        if (user) {
            res.status(200).json({
                login: true,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    birthdate: user.birthdate,
                    nDni: user.nDni,
                    profilePicture: user.profilePicture
                },
            });
        }
        else {
            res.status(400).json({ login: false, message: 'Invalid credentials' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error during login', error });
    }
});
exports.loginUser = loginUser;
