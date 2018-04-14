import * as bcrypt from 'bcryptjs';
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: 'uuid';

  @Column()
  username: string;

  @Column()
  password_digest: string;

  set_password(pass: string) {
    return bcrypt.hash(pass, 10)
      .then(hash => {
        console.trace('done: ', hash);
        this.password_digest = hash;
        console.trace('new digest: ', this.password_digest);
      }).catch(err => console.trace(err));
  }
}
