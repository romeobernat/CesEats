import {Table, Model, Column, DataType, BelongsToAssociation, Association, BelongsTo, HasMany} from "sequelize-typescript";
import {Country} from "./country.model";

@Table({
    timestamps: false,
    tableName: "City",
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

    @BelongsTo(() => Country, "country_fk")
    country: Country

}