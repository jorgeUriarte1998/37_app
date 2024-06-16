import {pool} from '../db.js'

export const getSomething = async (req,res) => {
    const {rows} = await pool.query('SELECT * FROM some1')
    res.json(rows);
}
export const getOneSomething = async (req,res) => {
    const {id} = req.params
    const {rows} = await pool.query('SELECT * FROM some1 WHERE id = $1', [id])
    if (rows.length === 0){
        return res.status(404).json({ message: "Records not found"})
    }
    res.json(rows);
}
export const createSomething = async (req,res) => {
    const data = req.body
    const {rows} = await pool.query('INSERT INTO some1 (information) VALUES ($1) RETURNING *', [data.information])
    return res.json(rows[0])
}

export const deleteSomething = async (req,res) => {
    const {id} = req.params
    const {rows, rowCount} = await pool.query('DELETE FROM some1 WHERE id = $1 RETURNING *', [id])
    if (rowCount === 0){
        return res.status(404).json({ message: "Records not found"})
    }
    return res.sendStatus(204)
}

export const updateSomething = async (req,res) => {
    const {id} = req.params
    const data = req.body
    const result = await pool.query('UPDATE some1 SET information = $1 WHERE id = $2', [data.information, id])
    return res.send('ACTUALIZADO')
}