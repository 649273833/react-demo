import cookie from 'react-cookie'
if (process.env.NODE_ENV === 'development') {
    require('../../../mock/todoList')
}
let token = cookie.load('token');
let postApi = (path, mock) => {
    return path + (mock ? '' : '.mock') + '?token=' + token;
};
export default {
    "newsList1":postApi('/api/newsList1'),
    "newsList2":postApi('/api/newsList2'),
    'todoList':postApi('/todoList',0),
    'getip':postApi('https://api.uu20.top/api/ip.php',1),
    'login':postApi('https://api.uu20.top/api/login.php',1),
}