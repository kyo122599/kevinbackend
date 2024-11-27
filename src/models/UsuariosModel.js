class UsuariosModel {
    #orientDB;

    constructor() {
        Object.preventExtensions(this);
    }

    defineModel = async (orientDB) => {
        this.#orientDB = await orientDB;
    }

    // Fetch all users
    fetchUsersAll = async () => {
        let session = await this.#orientDB.pool.acquire();
        let data = await session.select().from('juegos').all();
        session.close();
        return data;
    }

    createUsers = async (object) => {
        let session = await this.#orientDB.pool.acquire();
        let idRecord = await session.create('Vertex', 'juegos').set(object).one();
        return idRecord;


    }

    // Update a user by IDz
    updateUsers = async (id_juegos, object) => {
        let session = await this.#orientDB.pool.acquire();
        try {
            // Realizamos la actualización del usuario con el campo id_usuario
            let result = await session.update('juegos')
                .set(object)
                .where({ 'id_juegos': id_juegos}) // Usamos id_usuario en lugar de @rid
                .return('AFTER')
                .one();

            return result;
        } catch (error) {
            throw new Error('Error actualizando el juego');
        } finally {
            session.close(); // Cierra la sesión de OrientDB
        }
    };

    // Delete a user by ID
    deleteUser = async(id_juegos)=>{
        let session = await this.#orientDB.pool.acquire();
        let deletedCount = await session.delete('Vertex', 'juegos').where({ id_juegos }).one();
         return deletedCount; 
    }//usariomodelos
}

module.exports = new UsuariosModel();
