const express = require ('express')
const MoviesService = require('../services/movies')

function moviesApi(app) {
  const router = express.Router()
  app.use('/api/movies', router)

  const moviesService = new MoviesService

  router.get('/', async function(req, res, next) {
    const { tags } = req.query
    try {
      const movies = await moviesService.getMovies({ tags })

      res.status(200).json({
        data: movies,
        message: 'Movies listed'
      })
    } catch (err) {
      next(err)
    }
  })

  // Read
  router.get('/:movieId', async function(req, res, next) {
    const { movieId } = req.params
    try {
      const movies = await moviesService.getMovie({ movieId })

      res.status(200).json({
        data: movies,
        message: 'Movies retrieved'
      })
    } catch (err) {
      next(err)
    }
  })

  // Create
  router.post('/', async function(req, res, next) {
    const { body: movie } = req
    try {
      const createMovieId = await moviesService.createMovie({ movie })

      res.status(201).json({
        data: createMovieId,
        message: 'Movie created'
      })
    } catch (err) {
      next(err)
    }
  })

  // Update
  router.put('/:movieId', async function(req, res, next) {
    const { movieId } = req.params
    const { body: movie } = req

    try {
      const updatedMovieId = await moviesService.updateMovie({ movieId, movie })

      res.status(200).json({
        data: updatedMovieId,
        message: 'Movies updated'
      })
    } catch (err) {
      next(err)
    }
  })
  
  // Delete
  router.delete('/:movieId', async function(req, res, next) {
    const { movieId } = req.params

    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieId })

      res.status(200).json({
        data: deletedMovieId,
        message: 'Movie deleted'
      })
    } catch (err) {
      next(err)
    }
  })
  
}

module.exports = moviesApi