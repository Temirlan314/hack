const resource = '/rest/api/companies'
const resource_public = '/rest/api/public'

export default ($axios) => ({
    all(company, role , params) {
        return $axios.get(`${resource}/${company}/${role}/invoices`, { params })
    },

    getRoutes(id){
        return $axios.get(`localhost:3306/manager/user/${id}`)
    },

    // clientAll(client, params) {
    //     return $axios.get(`${resource}/${client}/client/invoices`, { params })
    // },

    show(company, role, invoice) {
        return $axios.get(`${resource}/${company}/${role}/invoices/${invoice}`)
    },

    // clientShow(client, invoice) {
    //     return $axios.get(`${resource}/${client}/client/invoices/${invoice}`)
    // },

    send(seller, invoice) {
        return $axios.get(`${resource}/${seller}/seller/invoices/${invoice}/send`)
    },

    createInvoiceByClient(params) {
        return $axios.post(`${resource_public}/invoices`, params)
    },

    accept(client, invoice) {
        return $axios.get(`${resource}/${client}/client/invoices/${invoice}/accept`)
    },

    decline(client, invoice) {
        return $axios.get(`${resource}/${client}/client/invoices/${invoice}/decline`)
    },

    // createInvoiceByClient(params) {
    //     return $axios.post(`/api/public/invoices/`, {params})
    // },

    create(seller, payload) {
        return $axios.post(`${resource}/${seller}/invoices`, payload)
    },

    update(seller, invoice, payload) {
        return $axios.post(`${resource}/${seller}/invoices/${invoice}`, payload, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    },

    delete(seller, invoice) {
        return $axios.delete(`${resource}/${seller}/clients/${invoice}`)
    },

    total(company, role) {
        return $axios.get(`${resource}/${company}/${role}/invoices/total-outstanding`)
    },

    overdue(company, role) {
        return $axios.get(`${resource}/${company}/${role}/invoices/overdue`)
    },

    due(company, role) {
        return $axios.get(`${resource}/${company}/${role}/invoices/due`)
    },

    // clientTotal(client) {
    //     return $axios.get(`${resource}/${client}/client/invoices/total-outstanding`)
    // },

    // clientOverdue(client) {
    //     return $axios.get(`${resource}/${client}/client/invoices/overdue`)
    // },

    // clientDue(client) {
    //     return $axios.get(`${resource}/${client}/client/invoices/due`)
    // },
    getInvoiceNumber(seller) {
        return $axios.get(`${resource}/${seller}/seller/invoices/get-invoice-number`)
    },

    invoicesCount(company, role) {
        return $axios.get(`${resource}/${company}/${role}/invoices-count`)
    },
})
