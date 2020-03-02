module.exports = {
  roots: ['<rootDir>/src'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^database/(.*)$': '<rootDir>/src/database/$1',
    '^schema': '<rootDir>/src/schema',
    '^controllers': '<rootDir>/src/controllers',
    '^services': '<rootDir>/src/services',
    '^repositories': '<rootDir>/src/repositories',
    '^pubsub/(.*)$': '<rootDir>/src/pubsub/$1',
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!<rootDir>/src/controllers/internal/*.ts",
    "!<rootDir>/src/services/internal/*.ts",
    "!<rootDir>/src/database/**/*.ts",
    "!<rootDir>/src/utils/**/*.ts",
    "!<rootDir>/src/app/**/*.ts",
    "!<rootDir>/src/index.ts",
    "!<rootDir>/src/pubsub/**/*.ts",
  ]
}