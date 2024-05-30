import server from './server';

// import bodyParser from 'body-parser';

import { PORT } from './config/envs';


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});