// CREATING MORGAN FROM SCRATCH
// no path since it's global
module.exports = type => {
  return (req, res, next) => {
    // gives date and time without timezone
    const time = new Date().toISOString()
    // log out info about the request
    console.log(`[${time}] ${req.ip} ${req.method} ${req.url}`)
    // move on to next piece of middleware
    next()
  }
}
