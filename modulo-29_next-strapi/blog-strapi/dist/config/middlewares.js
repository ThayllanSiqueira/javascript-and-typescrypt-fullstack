"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::errors',
    'strapi::logger',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'img-src': ["'self'", 'data:', 'blob:', 'strap.io', 'market-assets.strapi.io', 'res.cloudinary.com',],
                    'media-src': ["'self'", 'data:', 'blob:', 'strap.io', 'market-assets.strapi.io', 'res.cloudinary.com',],
                    upgradeInsecureRequests: null,
                }
            }
        }
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
