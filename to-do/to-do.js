const fs = require('fs');

let listToDo = [];

const crear = (descripcion) => {

    readDB();

    let toDo = {
        descripcion,
        completado: false
    };

    listToDo.push(toDo);

    saveDB();

    return toDo;
}

const saveDB = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("No se pudo grabar", err);
    });

}

const readDB = () => {

    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

const getListado = (completado) => {
    if (listToDo === null || listToDo === undefined || listToDo.length === 0) {
        readDB();
    }
    if (completado === undefined) {
        return listToDo;
    } else {
        return listToDo.filter(tarea => tarea.completado === completado);
    }
}

const actualizar = (descripcion, completado = true) => {

    readDB();

    let index = listToDo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listToDo[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    readDB();


    let nuevoListado = listToDo.filter(tarea => tarea.descripcion !== descripcion);

    if (listToDo.length === nuevoListado.length) {
        return false;
    } else {
        listToDo = nuevoListado;
        saveDB();
        return true;
    }

    //let index = listToDo.findIndex(tarea => tarea.descripcion === descripcion);
    //
    //if (index >= 0) {
    //    listToDo.splice(index);
    //    saveDB();
    //    return true;
    //} else {
    //    return false;
    //}

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}