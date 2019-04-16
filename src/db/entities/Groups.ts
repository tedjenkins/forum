// * ------------------------------------------------
// * A user can join a group. They are like factions.
// * ------------------------------------------------
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Groups {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  public id!: number;

  @Column({
    type: 'int',
    nullable: false,
    name: 'user_id'
  })
  public userId!: number;

  @Column('varchar', {
    nullable: false,
    length: 64,
    name: 'name'
  })
  public name!: string;

  @Column('varchar', {
    nullable: false,
    length: 128,
    name: 'description'
  })
  public description!: string;

  @Column('datetime', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'date_created'
  })
  public dateCreated!: string;
}
