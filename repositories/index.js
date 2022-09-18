import Manager from '~/repositories/ManagerRepository'

export default ($axios) => ({
    manager: Manager($axios),
    })
