//get index page

function getIndex(req, res, next) {
  res.send("This is home page");
}

module.exports = {
  getIndex,
};
