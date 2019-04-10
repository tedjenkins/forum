import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Users {

    @PrimaryGeneratedColumn({
      type: 'int',
      name: 'id'
    })
    public id!: number;

    @Column('varchar', {
      nullable: false,
      length: 64,
      name: 'name'
    })
    public name!: string;

    @Column('varchar', {
      nullable: false,
      length: 64,
      name: 'password'
    })
    public password!: string;

    @Column('varchar', {
      nullable: false,
      length: 64,
      name: 'email'
    })
    public email!: string;

    @Column('datetime', {
      nullable: false,
      default: () => 'CURRENT_TIMESTAMP',
      name: 'date_registered'
    })
    public dateRegistered!: string;

    @Column({
      type: 'tinyint',
      nullable: false,
      name: 'role'
    })
    public role!: number;
}
