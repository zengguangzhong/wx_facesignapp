
import  T from './types';
import API from '@/api/index'
export default {
  //获取用户信息
    [T.SET_WX_READY]({commit},payload){
      commit(T.SET_WX_READY,payload);
    },
}
