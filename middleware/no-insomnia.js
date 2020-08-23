module.exports = () => {
  return (req, res, next) => {
    const agent = req.headers['user-agent']

    if (/insomnia/i.test(agent)) {
      res.status(418).json({
        message: 'No insomnia allowed here',
      })
    }
    next()
  }
}
