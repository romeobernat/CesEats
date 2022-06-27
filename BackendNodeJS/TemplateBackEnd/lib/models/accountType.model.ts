import {Table, Model, Column, DataType, BelongsToAssociation, Association, BelongsTo, HasMany} from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "AccountType",
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