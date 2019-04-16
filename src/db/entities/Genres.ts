// * ------------------------------------
// * The name for 'boards', at this time.
// * ------------------------------------
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Genres {
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
