import sequelize from 'sequelize';

const { STRING, UUID, UUIDV4, INTEGER, BIGINT } = sequelize.DataTypes;

export default function (sequelize: any) {
    sequelize.define('CinemaScreening', {
        cinemaScreeningID: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allownull: false,
        },
        filmTitle: {
            type: STRING,
            allownull: false,
        },
        duration: {
            type: INTEGER,
            allownull: false,
        },
        startTime: {
            type: BIGINT,
            allownull: false,
        },
    })
};