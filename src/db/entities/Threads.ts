import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Threads {

    @PrimaryGeneratedColumn({
      type: 'int',
      name: 'id'
    })
    public id!: number;

    @Column('varchar', {
      nullable: false,
      length: 64,
      name: 'title'
    })
    public title!: string;

    @Column({
      type: 'int',
      nullable: false,
      name: 'author_id'
    })
    public authorId!: number;

    @Column({
      type: 'int',
      nullable: false,
      name: 'board_id'
    })
    public boardId!: number;

    @Column({
      type: 'tinyint',
      nullable: false,
      name: 'isPromoted'
    })
    public isPromoted!: number;
}
