import axios from 'axios'
import $q from 'q'
import { $utils } from '../helper'
import router from '../router'

function requestHandle(options = {}) {
    let defer = $q.defer()
    axios(options)
        .then(res => {
            if (res.status === 200) {
                const data = res.data;
                if (data.code === 0 || data.code === undefined || data.code === 100) {
                    defer.resolve(data);
                } else if (data.code === 401) {
                    router.replace({ name: 'home' })
                    defer.reject(data);
                } else {
                    defer.reject(data);
                }
            } else if (res.status === 401) {
                router.replace({ name: 'home' })
                // defer.reject(data);
            } else {
                defer.reject({ message: '服务器发生错误，请稍后再试' });
            }
        })
        .catch(err => {
            if (err.response.status === 401) {
                router.replace({ name: 'login' })
            }
            defer.reject({ message: '服务器发生错误，请稍后再试' });
        });
    return defer.promise;
}

export default {
    post: function (url, params) {
        return requestHandle({
            method: 'post',
            url: $utils.queryString(url),
            data: JSON.stringify(params)
        })
    },
    get: function (url, params) {
        return requestHandle({
            mathod: 'get',
            url: $utils.queryString(url, params)
        })
    }
};