export const type = "saveUser"

const saveUser = user => {
    return {
        type,
        payload: user
    }
}

export default saveUser