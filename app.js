const { argv } = require('./config/yargs');
const colors = require('colors');

const toDo = require('./to-do/to-do');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = toDo.getListado(argv.completado);
        for (let t of listado) {
            console.log("============Por Hacer============".green);
            console.log(t.descripcion);
            console.log('Estado: ', t.completado);
            console.log("=================================".green);
        }
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}