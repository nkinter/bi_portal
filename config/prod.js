module.exports = {
    dburl : process.env.MONGO_URI,
    sessionSecret: process.env.COOKIE_KEY,
    ldap: {
        dn: process.env.LDAP_DN,
        url: process.env.LDAP_URI,
        binddn: process.env.LDAP_BINDDN,
        bindsecret: process.env.LDAP_SECRET
    }
};