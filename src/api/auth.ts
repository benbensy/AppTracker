import { request } from "./fetcher"

export const login = async () => {
    return request({
        method: 'POST',
        url: '/api/designer/login',
    })
}