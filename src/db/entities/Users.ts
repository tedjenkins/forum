// * ------------------------------
// * Regular users database entity.
// * ------------------------------
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
    name: 'date_created'
  })
  public dateCreated!: string;

  @Column({
    type: 'int',
    nullable: true,
    name: 'group_id'
  })
  public groupId!: number;

  @Column({
    type: 'int',
    nullable: true,
    name: 'ban_id'
  })
  public banId!: number;
}
