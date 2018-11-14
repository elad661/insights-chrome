const lodash = require('lodash');

const log = require('../logger')('insights/user.js');

/* eslint-disable camelcase */
module.exports = (token) => {
    let user = token ? {
        identity: {
            id: token.user_id,
            org_id: token.account_id,
            account_number: token.account_number,
            username: token.username,
            email: token.email,
            first_name: token.firstName,
            last_name: token.lastName,
            full_name: `${token.firstName} ${token.lastName}`,
            address_string: `"${token.firstName} ${token.lastName}" ${token.email}`,
            is_active: true,
            locale: token.lang,
            is_org_admin: lodash.includes(token.realm_access.roles, 'admin:org:all'),
            is_internal: lodash.includes(token.realm_access.roles,  'redhat:employees')
        }
    } : null;

    log(`User ID: ${user.identity.id}`);
    return user;
};
/* eslint-enable camelcase */