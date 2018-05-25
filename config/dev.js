module.exports = {
    dburl : 'mongodb://nkinter:fIre2167@rdncloudmongo-shard-00-00-pi3tl.mongodb.net:27017,rdncloudmongo-shard-00-01-pi3tl.mongodb.net:27017,rdncloudmongo-shard-00-02-pi3tl.mongodb.net:27017/biportal?ssl=true&replicaSet=RDNCloudMongo-shard-0&authSource=admin',
    sessionSecret: '1o3fn10ng19g0930ifnmoing89204hbngoin1po2fow1mkds019j',
    /*ldap: {
        dn: 'dc=corp,dc=pgcore,dc=com',
        url: 'ldap://localhost:10389',
        binddn: 'uid=admin,ou=system',
        bindsecret: 'secret'
    }*/
    ldap: {
        dn: 'OU=Fingerhut Direct Marketing,OU=IT Administration,DC=corp,DC=pgcore,DC=com',
        url: 'ldap://corp.pgcore.com',
        binddn: 'CN=Neill.Kinter,OU=Fingerhut Direct Marketing,OU=IT Administration,DC=corp,DC=pgcore,DC=com',
        bindsecret: 'speci@lK'
    }
};


/*
This works. Holy hell
ldap: {
        dn: 'OU=Fingerhut Direct Marketing,OU=IT Administration,DC=corp,DC=pgcore,DC=com',
        url: 'ldap://corp.pgcore.com',
        binddn: 'CN=Neill.Kinter,OU=Fingerhut Direct Marketing,OU=IT Administration,DC=corp,DC=pgcore,DC=com',
        bindsecret: 'speci@lK'
    }*/

