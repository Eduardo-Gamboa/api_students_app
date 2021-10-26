module.exports = {
    getAll: function(con, funcion) {
        con.query("Select *from students", funcion);
    },
    getByID: function(con, id, funcion) {
        con.query("Select *from students where id = ?", [id], funcion);
    },
    insert: function(con, datos, funcion) {
        con.query("insert into students(name, grade, group_, email) values (?, ?, ?, ?)", [datos.name, datos.grade, datos.group_, datos.email], funcion);
    },
    update: function(con, datos, id, funcion) {
        con.query("update students SET name = ?, grade = ?, group_ = ?, email = ? where id = ?", [datos.name, datos.grade, datos.group_, datos.email, id], funcion);
    },
    delete: function(con, id, funcion) {
        con.query("DELETE FROM students WHERE id = ?", [id], funcion);
    }
}