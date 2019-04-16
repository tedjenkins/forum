// * --------------------------------------------------------------------------------------
// * Users can be banned for any kind of reason and the data is stored in a separate table.
// * --------------------------------------------------------------------------------------
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Bans {
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
    name: 'reason'
  })
  public reason!: string;

  @Column('datetime', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'date_created'
  })
  public dateCreated!: string;

  @Column('datetime', {
    nullable: true,
    name: 'expiry_date'
  })
  public expiryDate!: string;
}
