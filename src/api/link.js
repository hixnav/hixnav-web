import request from '@/utils/request'

export function addArticleLink(data) {
    return request({
        url: '/api/addArticleLink',
        method: 'post',
        data
    })
}

export function article(data) {
    return request({
        url: '/api/article',
        method: 'post',
        data
    })
}


export function exportArticleLink(data) {
    return request({
        url: '/api/exportArticleLink',
        method: 'post',
        data
    })
}

export function delArticleLink(data) {
    return request({
        url: '/api/delArticleLink',
        method: 'post',
        data
    })
}
