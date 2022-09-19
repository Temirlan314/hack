import handleError from '~/helpers/errorResponseHandler'
import objectToFormData from '~/helpers/objectToFormData'

export const state = () => ({
    companyDataList: null,
    history: null,
    error: null,
    limits: null,
    sgJobs: null,
})

export const getters = {
    history(state) {
        return state.history
    },
    companyDataList(state) {
        return state.companyDataList
    },
    error(state) {
        return state.error
    },
    limits(state) {
        return state.limits
    },
    sgJobs(state) {
        return state.sgJobs

    }
}

export const mutations = {
    SET_LIMITS(state, limits) {
        state.limits = limits
    },
    SET_HISTORY(state, history) {
        state.history = history
    },
    SET_COMPANY_DATA_LIST(state, companyDataList) {
        state.companyDataList = companyDataList
    },
    SET_SG_JOBS(state, sgJobs) {
        state.sgJobs = sgJobs

    },
    SET_ERROR(state, error) {
        state.error = error
    }
}

export const actions = {
    async get_routes({ commit }, id) {
        try {
            // commit('SET_ERROR', null)
            // const response = await this.$repositories.manager.getRoutes(id);
            // console.log(response, "ROUTES");
            commit('SET_LIMITS', id)
            return response.data
        } catch (error) {
            const handledError = handleError(error)
            commit('SET_ERROR', handledError)
        }
    },
    async get_jobs({ commit }, params) {
        try {
            commit('SET_ERROR', null)
            const response = await this.$repositories.creditCheck.getJobs(params);
            commit('SET_SG_JOBS', response.data.data)
            return response.data.data
        } catch (error) {
            const handledError = handleError(error)
            commit('SET_ERROR', handledError)
            this.$notify({
                title: "Failure",
                content: "Jobs could not be loaded",
                variant: "info"
            })
        }
    },
    async get_history({ commit }, id) {
        try {
            commit('SET_ERROR', null)
            const response = await this.$repositories.creditCheck.getHistory(id)
            commit('SET_HISTORY', response.data)
            return response.data
        } catch (error) {
            const handledError = handleError(error)
            commit('SET_ERROR', handledError)
            this.$notify({
                title: "Failure",
                content: "Company scoring history could not be loaded",
                variant: "info"
            })
        }
    },
    async get_company_list({ commit }, params, uen) {
        try {
            commit('SET_ERROR', null)
            const response = await this.$repositories.creditCheck.all(params, uen)
            // console.log(response, "COMPANY_DATA_LIST");
            commit('SET_COMPANY_DATA_LIST', response.data)
            return response.data
        } catch (error) {
            const handledError = handleError(error)
            commit('SET_ERROR', handledError)
            this.$notify({
                title: "Failure",
                content: "Company DataList could not be loaded",
                variant: "info"
            })
        }
    },
    async get_history_list({ commit }, params) {
        try {
            commit('SET_ERROR', null)
            const response = await this.$repositories.creditCheck.getHistoryList(params)
            // console.log(response, "COMPANY_DATA_LIST");
            commit('SET_COMPANY_DATA_LIST', response.data)
            return response.data
        } catch (error) {
            const handledError = handleError(error)
            commit('SET_ERROR', handledError)
            this.$notify({
                title: "Failure",
                content: "Company histories list could not be loaded",
                variant: "info"
            })
        }
    },
}
