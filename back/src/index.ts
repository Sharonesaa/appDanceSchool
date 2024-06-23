import "reflect-metadata";
import server from './server';
// import bodyParser from 'body-parser';

import { PORT } from './config/envs';
import { AppDataSource } from './config/data-source';

AppDataSource.initialize()
  .then(res =>{
    console.log("Conexión a base de datos exitosa")
    server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
})


