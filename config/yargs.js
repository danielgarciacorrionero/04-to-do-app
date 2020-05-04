const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea.'
};

const completado = {
    alias: 'c',
    type: 'boolean',
    demand: false,
    desc: 'Marca la tarea como completada o pendiente.'
};

const argv = require('yargs')
    .command('listar', 'Listar todas las tareas', { completado })
    .command('crear', 'Crear una nueva tarea.', { descripcion })
    .command('actualizar', 'Actualiza una tarea.', { descripcion, completado })
    .command('borrar', 'Elimina una tarea.', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}