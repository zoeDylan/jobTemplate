function _randomColor(){return"#"+("00000"+(16777215*Math.random()+.5>>0).toString(16)).slice(-6)}function _randomNum(n,r){return r||(r=n,n=0),Math.round(Math.random()*(r-n)+n)}function _randomString(n){n=n||32;var r="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",t=r.length,a="";for(i=0;n>i;i++)a+=r.charAt(Math.floor(Math.random()*t));return a}function _isPhone(n){return/^1[3|4|5|7|8][0-9]\d{8}$/.test(n)}function _isEmail(n){return/^[0-9a-z][a-z0-9\._-]{1,}@[a-z0-9-]{1,}[a-z0-9]\.[a-z\.]{1,}[a-z]$/.test(n)}