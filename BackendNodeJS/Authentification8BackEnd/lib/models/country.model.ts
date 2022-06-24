import {Table, Model, Column, DataType, BelongsToAssociation, Association, BelongsTo, HasMany} from "sequelize-typescript";
import {Account} from "./account.model";

@Table({
    timestamps: true,
    tableName: "country",
})

export class Country extends Model {
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true
    })
    country!: string;

}