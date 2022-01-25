import {
    getStorageSync,
    clearStorage,
    request,
    showToast,
    navigateTo
} from 'remax/wechat'

// 获取环境变量
export function getBaseURI() {
    switch (process.env.NODE_ENV) {
        case 'dev':
            return 'http://xxx.xxx.xxx.xxx:xxxx'
        case 'test':
            return 'https://testxxx.com.cn'
        case 'prod':
            return 'https://xxx.com.cn'
        default:
            return 'http://xxx.xxx.xxx.xxx:xxxx'
    }
}

// 请求头
export const headers = {
    'Accept': 'application/json',
    'content-type': 'application/json'
}

export default class Request {
    // get请求
    get(url, data = {}, header) {
        return this.request('GET', url, data, header)
    }
    // post请求
    post(url, data = {}, header) {
        const token = getStorageSync('token')
        return this.request('POST', `${url}?token=${token}`, data, header)
    }
    request(method, url, data, header) {
        return new Promise((resolve, reject) => {
            try {
                if (!!getStorageSync('token') && method === 'GET') {
                    Object.assign(data, {
                        'token': getStorageSync('token')
                    })
                }

                const response = request({
                    url: getBaseURI() + url,
                    method,
                    data: data,
                    header: header || headers,
                    success: (res) => response.success = res.data,
                    fail: (error) => response.fail = error,
                    complete() {
                        if (response.success) {
                            // token 失效跳回登录页面
                            if (response.success.code === -2 || response.success.code === -3 || response.success.code === 902 || response.success.code === 904) {
                                showToast({
                                    title: '登录超时或未登录或token问题， 请重新登录！',
                                    icon: 'none',
                                    mask: true,
                                    duration: 1500
                                })
                                clearStorage();
                                setTimeout(() => {
                                    navigateTo({
                                        url: '/pages/login/index'
                                    })
                                }, 1500)
                                return
                            }
                            // 接口请求失败
                            if (response.success.code === -1) {
                                showToast({
                                    title: response.success.message,
                                    icon: 'none',
                                    duration: 1500
                                })
                                return
                            }
                            resolve(response.success)
                        } else {
                            reject(response.fail)
                        }
                    }
                })
            } catch (error) {
                showToast({
                    title: '网络请求出错',
                    icon: 'none'
                });
            }
        })
    }
}