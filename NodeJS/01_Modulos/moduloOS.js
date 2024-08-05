// El módulo os de Node.js proporciona una serie de utilidades para interactuar con el sistema operativo. Este módulo te permite obtener información sobre el sistema operativo subyacente, como el tipo de sistema operativo, la arquitectura, el tiempo de actividad, y mucho más


// Obtener el tipo de sistema operativo
const os = require('os');

// ========= os.arch() =========
//Devuelve una cadena que identifica la arquitectura de la CPU para la cual se ha compilado el binario de Node.js.
console.log(os.arch());  // 'x64', 'arm', 'ia32', etc.


// ======== os.platform() =========
//Devuelve una cadena que identifica la plataforma del sistema operativo.
console.log(os.platform());  // 'darwin', 'win32', 'linux', etc.


// ======== os.cpus() =========
//Devuelve un arreglo de objetos que contienen información sobre los procesadores del sistema operativo.
console.log(os.cpus());

// ======== os.release() =========
//Devuelve una cadena que identifica la versión del sistema operativo.
console.log(os.release()); // '20.6.0'


// ======== os.totalmem() =========
//Devuelve la memoria total del sistema operativo en bytes. 
console.log(os.totalmem()); // 17179869184


// ======== os.uptime() =========
//Devuelve el tiempo de actividad del sistema operativo en segundos.
console.log(os.uptime()); // 0

// ====== os.userInfo() =========
//Devuelve un objeto que contiene información sobre el usuario actual.
console.log(os.userInfo());

// ====== os.type() =========
//Devuelve una cadena que identifica el sistema operativo.
console.log(os.type()); // 'Darwin', 'Windows_NT', 'Linux', etc.

// ====== os.hostname() =========
//Devuelve una cadena que identifica el nombre del host.
console.log(os.hostname());




console.log(os.type()); // Windows_NT


