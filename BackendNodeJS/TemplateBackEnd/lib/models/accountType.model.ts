import {Table, Model, Column, DataType, BelongsToAssociation, Association, BelongsTo, HasMany} from "sequelize-typescript";
import {Account} from "./account.model";

@Table({
    timestamps: true,
    tableName: "accountType",
})

export class AccountType extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id_type!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    type!: string;
    
}