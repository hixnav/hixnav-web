import {dbTest, dbMigrate, cosMigrate} from '@/api/config'

const getDefaultState = () => {
    return {}
}

const state = getDefaultState()

const mutations = {}

const actions = {
    dbTest({ commit }, data) {
        return new Promise((resolve, reject) => {
            dbTest(data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    dbMigrate({ commit }, data) {
        return new Promise((resolve, reject) => {
            dbMigrate(data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    cosMigrate({ commit }, data) {
        return new Promise((resolve, reject) => {
            cosMigrate(data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}