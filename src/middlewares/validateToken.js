export const authRequired = (req, res, next) => {
    console.log('validate token')
    next()
}