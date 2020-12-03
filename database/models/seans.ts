import sequelize from 'sequelize';

const { STRING, UUID, UUIDV4, INTEGER, DATE } = sequelize.DataTypes;

export default function (sequelize: any) {
    sequelize.define('Seans', {
        seansID: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allownull: false,
        },
        filmTime: {
            type: STRING,
            allownull: false,
        },
        duration: {
            type: INTEGER,
            allownull: false,
        },
        startTime: {
            type: DATE,
            allownull: false,
        },
    })
};