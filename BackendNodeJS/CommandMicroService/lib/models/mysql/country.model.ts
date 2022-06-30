import {Table, Model, Column, DataType, BelongsToAssociation, Association, BelongsTo, HasMany} from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "Country",
})

export class Country extends Model {
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true
    })
    country!: string;

}