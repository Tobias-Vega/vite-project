import { createConnection } from "mysql2/promise";

export const newConnection = async () => {
    try {
        const connection = await createConnection({
        host:"localhost",
        user: "root",
        database: "tasks_db"
});
        return connection
    } catch (error) {
        console.error('Ocurrio un error', error)
        res.status(500).json({ msg: 'Internal server error', error: error.msg })
    }
}