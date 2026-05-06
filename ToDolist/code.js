const input = document.getElementById('tareaInput');
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');
const mensaje = document.getElementById('mensajeVacio');

boton.addEventListener('click', agregarTarea);

function agregarTarea() {
  const texto = input.value.trim();

  if (texto === '') return;

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';

  const span = document.createElement('span');
  span.textContent = texto;

  const acciones = document.createElement('div');

  const btnEditar = document.createElement('button');
  btnEditar.className = 'btn btn-warning btn-sm me-2';
  btnEditar.innerHTML = '<i class="fas fa-edit"></i>';
  btnEditar.addEventListener('click', () => editarTarea(span));

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn btn-danger btn-sm';
  btnEliminar.innerHTML = '<i class="fas fa-trash"></i>';
  btnEliminar.addEventListener('click', () => eliminarTarea(li));

  acciones.append(btnEditar, btnEliminar);
  li.append(span, acciones);
  lista.appendChild(li);

  input.value = '';
  actualizarMensaje();
}

function eliminarTarea(tarea) {
  lista.removeChild(tarea);
  actualizarMensaje();
}

function editarTarea(span) {
  const nuevoTexto = prompt('Modificar tarea:', span.textContent);
  if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
    span.textContent = nuevoTexto;
  }
}

function actualizarMensaje() {
  mensaje.style.display = lista.children.length === 0 ? 'block' : 'none';
}