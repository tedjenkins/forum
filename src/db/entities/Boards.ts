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

    @Column('varchar', {
        nullable: false,
        length: 255,
        name: 'desc'
      })
    public desc!: number;
}
