import {Table, Model, Column, DataType, BelongsToAssociation, Association, BelongsTo, HasMany} from "sequelize-typescript";
import {Account} from "./account.model";

@Table({
    timestamps: true,
    tableName: "city",
})

export class City extends Model {
  
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    postal_code!: Int16Array;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    city!: string;

}