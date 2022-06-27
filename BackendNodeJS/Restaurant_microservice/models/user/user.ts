import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "user",
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
    
  })
  Firstname!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  Lastname!: string;

  @Column({
    type: DataType.CHAR,
    // allowNull: false,
    field: "Address"
  })
  Address!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false 
  })
  Number!: number;

  @Column({
    type: DataType.STRING,
    // allowNull: false
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  Password!: string;
}
