import { addArticleLink, article, exportArticleLink } from '@/api/link'

const getDefaultState = () => {
    return {}
}

const state = getDefaultState()

const mutations = {}

const actions = {
    addArticleLink({ commit }, data) {
        return new Promise((resolve, reject) => {
            addArticleLink(data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    article({ commit }, data) {
        return new Promise((resolve, reject) => {
            article(data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    exportArticleLink({ commit }, data) {
        return new Promise((resolve, reject) => {
            exportArticleLink(data).then(response => {
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