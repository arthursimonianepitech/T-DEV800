const { Router }= require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/user.controller');
const { getAlbums, getAlbumById, createAlbum, deleteAlbum, updateAlbum } = require('../controllers/album.controller');
const { getImages, getImageById, createImage, deleteImage, updateImage } = require('../controllers/image.controller');

// USERS
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

// ALBUMS
router.get('/albums', getAlbums);
router.get('/albums/:id', getAlbumById);
router.post('/albums', createAlbum);
router.delete('/albums/:id', deleteAlbum);
router.put('/albums/:id', updateAlbum);

//IMAGES
router.get('/images', getImages);
router.get('/images/:id', getImageById);
router.post('/images', createImage);
router.delete('/images/:id', deleteImage);
router.put('/images/:id', updateImage);

module.exports = router;