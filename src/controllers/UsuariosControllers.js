class UsuariosControllers {
    constructor() {
        Object.preventExtensions(this);
    }

    // Obtener todos los usuarios
    fetchUsers = async (req, resp) => {
        const data = "🎮 ¡Nivel alcanzado! Has encontrado todos los jugadores registrados.";
        resp.status(200).json({ message: data });
    }

    // Crear un nuevo usuario
    createUsers = async (req, resp) => {
        const data = "🕹️ ¡Nuevo jugador en el juego! El usuario ha sido creado con éxito. 🎉";
        resp.status(200).json({ message: data });
    }

    // Actualizar un usuario
    updateUsers = async (req, resp) => {
        const data = "🔄 ¡Actualización completada! El perfil del jugador ha sido mejorado.";
        resp.status(200).json({ message: data });
    }

    // Eliminar un usuario
    deleteUsers = async (req, resp) => {
        const data = "🗑️ ¡Game Over! El jugador ha sido eliminado. Si cambia de opinión, puede registrarse nuevamente.";
        resp.status(200).json({ message: data });
    }
}

module.exports = UsuariosControllers;
