const { pool } = require('../../database/config');

const getAlbums = async (req, res) => {
    const response = await pool.query('SELECT * FROM album');
    res.status(200).json(response.rows);
};

const getAlbumById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM album WHERE id = $1', [id]);
    res.json(response.rows);
};

const createAlbum = async (req, res) => {
    const { name } = req.body;
    const response = await pool.query('INSERT INTO album (name) VALUES ($1)', [name]);
    console.log(response);
    res.json({
        message: 'Album added succesfully',
        body: {
            album : {name}
        }
    })
};

const deleteAlbum = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM album WHERE id = $1', [id]);
    console.log(response);
    res.json(`ALBUM ${id} deleted succesfully`);
}

const updateAlbum = async (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    const response = await pool.query('UPDATE album SET name = $1 WHERE id = $2', [
        name, 
        id
    ]);
    console.log(response);
    res.json('Album updated succesfully')
}

module.exports = {
    getAlbums,
    getAlbumById,
    createAlbum,
    deleteAlbum,
    updateAlbum
}