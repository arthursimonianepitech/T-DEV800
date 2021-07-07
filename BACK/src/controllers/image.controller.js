const { pool } = require('../../database/config');

const getImages = async (req, res) => {
    const response = await pool.query('SELECT * FROM images');
    res.status(200).json(response.rows);
};

const getImageById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM images WHERE id = $1', [id]);
    res.json(response.rows);
};

const createImage = async (req, res) => {
    const { name } = req.body;
    const response = await pool.query('INSERT INTO images (name) VALUES ($1)', [name]);
    console.log(response);
    res.json({
        message: 'Image added succesfully',
        body: {
            image : {name}
        }
    })
};

const deleteImage = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM images WHERE id = $1', [id]);
    console.log(response);
    res.json(`IMAGE ${id} deleted succesfully`);
}

const updateImage = async (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    const response = await pool.query('UPDATE images SET name = $1 WHERE id = $2', [
        name, 
        id
    ]);
    console.log(response);
    res.json('Image updated succesfully')
}

module.exports = {
    getImages,
    getImageById,
    createImage,
    deleteImage,
    updateImage
}