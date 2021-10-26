const con = require('../../config/db');

class Student {
    async getAll() {
        try {
            const students = await con.query("Select *from students");
            return students.RowDataPacket;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = { Student };