/**
 * Create bu zechun.chen on 2016/12/22
 * api配置
 */
import axios from 'axios'

let url = '/api';

let func_axios = (api,cb) => {
    axios.get(api).then(function(res){
        if(res.status >= 200 && res.status <300){
            console.log(res);
            cb(res.data)
        }
    }).catch((error) => {
        // new Error('desc');
        return Promise.reject(error)
    })
}

export default {
    /**
     * 获取活动列表
     */
    apiGetEvents:(cb)=>func_axios(url+'/event/list?loc=108288',cb)
}
