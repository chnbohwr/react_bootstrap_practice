/**
 * 關於async取得資料並且做成action的部分可以參考
 * https://github.com/happypoulp/redux-tutorial/blob/master/08_dispatch-async-action-1.js
 *
 */
import GET from '../utility/ajax.js';
import CONST from '../const/const.js';

// export function getUserFromHttp() {
//   return function(dispatch) {
//     GET(CONST.USER_URL).then(function(data) {
//       var action = {
//         type: CONST.ACTION_GET_USER,
//         user:data
//       };
//       dispatch(data);
//     });
//   }
// }

export function getUserFromHttp(data = []){
  return {
    type:CONST.ACTION_GET_USER,
    user:data
  }
}

export function fooBar(reddit) {
  return function (dispatch) {
    return GET(CONST.USER_URL).then(users=>dispatch(getUserFromHttp(users)))
  }
}
