import createCache from 'vuex-cache';
const options = {
    timeout: 30000 // Equal to 30 seconds in milliseconds.
};
export const plugins = [createCache(options)]