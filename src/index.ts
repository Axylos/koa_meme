import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import app from './app';

createConnection().then(async connection => {

  const user = new User();
  user.username = "Timber";
  await user.set_password('asldkf');

  await connection.manager.save(user);
  
  const users = await connection.manager.find(User);
   
  app.listen(3000, () => console.log('up and running'));
    
}).catch(error => console.trace(error));
