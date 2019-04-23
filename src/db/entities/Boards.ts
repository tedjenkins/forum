// * -----------------------
// * Boards database schema.
// * -----------------------
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Boards {
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
}
