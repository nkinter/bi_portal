module.exports = {
    dburl : process.env.MONGO_URI,
    sessionSecret: process.env.COOKIE_KEY,
    ldap: {
        dn: process.env.LDAP_DN,
        url: process.env.LDAP_URI
    }
};