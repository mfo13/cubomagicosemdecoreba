// configuração mínima necessária, sem todos os recursos do config modelo da klaro
var klaroConfig = {

    storageMethod: 'localStorage',

    default: false,

    acceptAll: true,

    translations: {
        pt: {

            privacyPolicyUrl: '/politica-de-privacidade.html',
            purposes: {
                analytics: {title: 'Estatísticas de acesso'}
            }
        }
    },

    services: [
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                /^_ga$/,
                /^_ga_/,
                /^_gid$/,
                /^_gat/
            ]
        }
    ]

};