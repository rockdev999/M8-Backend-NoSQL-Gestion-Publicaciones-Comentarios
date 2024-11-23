# M8-Backend-NoSQL-Gestion-Publicaciones-Comentarios

API con nodejs, expres.js, mongoose.
API de Gestión de Publicaciones y Comentarios con Referencias entre Colecciones

Desarrolla una API que permita a los usuarios crear publicaciones y agregar comentarios a esas publicaciones. La API debe cumplir con los siguientes requisitos:
Creación de usuarios y autenticación: Los usuarios deben poder registrarse e iniciar sesión, de manera similar al ejercicio anterior, utilizando bcrypt para el hasheo de contraseñas y JWT para la autenticación.
Gestión de publicaciones: Los usuarios autenticados deben poder crear, editar y eliminar publicaciones. Cada publicación debe estar asociada al usuario que la creó.
Gestión de comentarios: Los usuarios autenticados pueden agregar comentarios a cualquier publicación. Los comentarios deben estar asociados tanto al usuario que los hizo como a la publicación a la que pertenecen.
Referencias entre colecciones: Las publicaciones deben tener una referencia al usuario que las creó y los comentarios deben tener referencias tanto a la publicación como al usuario que los escribió.
Protección de rutas: Las rutas para crear publicaciones, agregar comentarios y editar/eliminar publicaciones deben estar protegidas por autenticación JWT.
Validación y manejo de errores: La API debe manejar errores como intentar agregar un comentario a una publicación que no existe o intentar eliminar una publicación sin ser el autor.
