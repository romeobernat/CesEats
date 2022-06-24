import {Table, Model, Column, DataType, BelongsToAssociation, Association, BelongsTo, ForeignKey} from "sequelize-typescript";
import {AccountType} from "./accountType.model";
import {City} from "./city.model";
import {Country} from "./country.model";

@Table({
    timestamps: true,
    tableName: "account",
})

export class Account extends Model {

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id_person!: number;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastname!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    birth_date!: Date;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    phone_number!: Int16Array;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    mail!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: true,
    })
    restaurant_id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    updatedAt!: Date;


    @BelongsTo(() => Account, "sponsor")
    account: Account

    @BelongsTo(() => AccountType, "type_id")
    accountType: AccountType

    @BelongsTo(() => City, "postal_code_fk")
    city: City

    @BelongsTo(() => Country, "country_fk")
    country: Country
    
}