import sequelize from 'sequelize';

const { STRING, UUID, UUIDV4 } = sequelize.DataTypes;

export default function (sequelize: any) {
    sequelize.define('CinemaHalls', {
        hallID: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allownull: false,
        },
        capacity: {
            type: STRING,
            allownull: false,
        },
        name: {
            type: STRING,
            allownull: false,
        },
    })
};