/* eslint-disable consistent-return */
const router = require('express').Router();

const Film = require('../db');

router.post(
    '/createFilm',
    async (req, res, next) => {
        try {
            const created = await Film.create(req.body);
            return res.status(201).json(created);
        } catch (err) {
            return next(err);
        }
    },
);

router.get('/getAllFilm', async (req, res, next) => {
    try {
        const results = await Film.find();
        res.json(results);
    } catch (err) {
        return next(err);
    }
});

router.get('/findFilm/', async (req, res, next) => {
    try {
        const results = await Film.find({ name: { $regex: req.query.name, $options: 'i' } });
        return res.json(results);
    } catch (err) {
        return next(err);
    }
});

router.get('/getFilm/:id', async (req, res, next) => {
    // console.log('PARAMS', req.params);
    const { id } = req.params;
    if (!id) return next({ statusCode: 400, message: 'Missing id' });

    try {
        const result = await Film.findById(id);
        res.json(result);
    } catch (err) {
        next(err);
    }
});

router.patch('/updateFilm/:id', async (req, res, next) => {
    // console.log('PARAMS', req.params);
    // console.log('QUERY:', req.query);
    const { id } = req.params;
    try {
        const result = await Film.findByIdAndUpdate(id, req.query);
        res.json(result);
    } catch (err) {
        next(err);
    }
});

router.delete('/removeFilm/:id', async (req, res, next) => {
    // console.log('PARAMS:', req.params);

    try {
        const result = await Film.findByIdAndDelete(req.params.id);
        return res.status(204).send(result);
    } catch (err) {
        return next(err);
    }
});

module.exports = router;