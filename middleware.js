function checkTime(req, res, next) {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res
        .status(403)
        .send(
          " Our website is open from 9:00 AM to 17:00 PM, Monday to Friday. We look forward to serving you during our business hours!"
        );
    }
  }
  
  module.exports = checkTime;