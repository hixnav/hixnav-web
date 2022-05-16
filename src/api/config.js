import request from '@/utils/request'

export function dbTest(data) {
    return request({
        url: '/api/db/test',
        method: 'post',
        data
    })
}

export function dbMigrate(data) {
    return request({
        url: '/api/migrate/db',
        method: 'post',
        data
    })
}
