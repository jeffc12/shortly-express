

const parseCookies = (req, res, next) => {
  //var arr = JSON.stringify(req.headers.cookie).split(/':'|'='\);
  //console.log(arr);
  if ( !req.headers.cookie ) {
    res.cookies = {};
    //Model.Sessions;
  } else {
    var id = req.headers.cookie.split(';');
    for ( var i = 0; i < id.length; i ++ ) {
      var index = id[i].indexOf('=');
      var value = id[i].substring(index+1, id[i].length);
      var key = id[i].substring(0, index).trim();
      req.cookies[key] = value;
    }
  }
  next(); 
};

module.exports = parseCookies;