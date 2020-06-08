const { defaults } = require('jest-config')
module.exports = {
    'roots': [
        '<rootDir>/test'
    ],
    'testMatch': [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    'transform': {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleFileExtensions: [ ...defaults.moduleFileExtensions, 'd.ts' ]
}