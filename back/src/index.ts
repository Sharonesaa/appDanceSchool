import express from 'express';
import bodyParser from 'body-parser';
import userController from './controllers/userController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', userController.register);
app.get('/users', userController.getUsers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});