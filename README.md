API de Gestión de Publicaciones y Comentarios con Referencias entre Colecciones

Desarrolla una API que permita a los usuarios crear publicaciones y agregar comentarios a esas publicaciones. La API debe cumplir con los siguientes requisitos:
Creación de usuarios y autenticación: Los usuarios deben poder registrarse e iniciar sesión, de manera similar al ejercicio anterior, utilizando bcrypt para el hasheo de contraseñas y JWT para la autenticación.
Gestión de publicaciones: Los usuarios autenticados deben poder crear, editar y eliminar publicaciones. Cada publicación debe estar asociada al usuario que la creó.
Gestión de comentarios: Los usuarios autenticados pueden agregar comentarios a cualquier publicación. Los comentarios deben estar asociados tanto al usuario que los hizo como a la publicación a la que pertenecen.
Referencias entre colecciones: Las publicaciones deben tener una referencia al usuario que las creó y los comentarios deben tener referencias tanto a la publicación como al usuario que los escribió.
Protección de rutas: Las rutas para crear publicaciones, agregar comentarios y editar/eliminar publicaciones deben estar protegidas por autenticación JWT.
Validación y manejo de errores: La API debe manejar errores como intentar agregar un comentario a una publicación que no existe o intentar eliminar una publicación sin ser el autor.

Solución Propuesta:

Modelo de Usuario: Igual que en el ejercicio anterior, se utilizará un esquema de Usuario que manejará la autenticación y la asociación con las publicaciones y comentarios.
Modelo de Publicación: Este esquema de Publicación incluirá un título, el contenido de la publicación y una referencia al usuario que la creó.
Modelo de Comentario: Este esquema de Comentario incluirá el contenido del comentario, una referencia al usuario que lo creó y una referencia a la publicación a la que pertenece.
Controladores: Se encargan de la lógica de las publicaciones y comentarios. Se podrán crear, editar y eliminar publicaciones solo si el usuario autenticado es el creador. Los comentarios podrán añadirse a publicaciones específicas, y cada comentario deberá referenciar tanto al usuario que lo creó como a la publicación.
Middlewares de autenticación y autorización: Igual que en el ejercicio anterior, un middleware autenticará al usuario usando JWT. También habrá un middleware de autorización que verifique si el usuario tiene permiso para editar o eliminar una publicación/comentario.
Validación y manejo de errores: Se debe validar que los campos requeridos estén completos (por ejemplo, título y contenido en una publicación) y que los usuarios no puedan interactuar con recursos a los que no tienen acceso.

ZOOM
API de Gestión de Publicaciones y Comentarios con Referencias entre Colecciones

Desarrolla una API que permita a los usuarios crear publicaciones y agregar comentarios a esas publicaciones. La API debe cumplir con los siguientes requisitos:
Creación de usuarios y autenticación: Los usuarios deben poder registrarse e iniciar sesión, de manera similar al ejercicio anterior, utilizando bcrypt para el hasheo de contraseñas y JWT para la autenticación.
Gestión de publicaciones: Los usuarios autenticados deben poder crear, editar y eliminar publicaciones. Cada publicación debe estar asociada al usuario que la creó.
Gestión de comentarios: Los usuarios autenticados pueden agregar comentarios a cualquier publicación. Los comentarios deben estar asociados tanto al usuario que los hizo como a la publicación a la que pertenecen.

4. Referencias entre colecciones: Las publicaciones deben tener una referencia al usuario que las creó y los comentarios deben tener referencias tanto a la publicación como al usuario que los escribió.3. 5. Protección de rutas: Las rutas para crear publicaciones, agregar comentarios y editar/eliminar publicaciones deben estar protegidas por autenticación JWT.6.Validación y manejo de errores: La API debe manejar errores como intentar agregar un comentario a una publicación que no existe o intentar eliminar una publicación sin ser el autor.

UTILIZAR VARIABLES DE ENTORNO
NOTA: Si desean enviarme el link del repo, porfavor enviarme las variable por priv
