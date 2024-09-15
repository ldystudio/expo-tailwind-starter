import { storage } from '~/common/storage'

const StorageHelper = {
    delete(key: string) {
        storage.delete(key)
    },
    clear() {
        storage.clearAll()
    },
    get theme(): string | undefined {
        return storage.getString('theme')
    },
    set theme(value: string) {
        storage.set('theme', value)
    },
}

export default StorageHelper
