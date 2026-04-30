export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-vitest',
  },

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'vitest-transformer-svg',
  },

  setupFilesAfterEnv: ['<rootDir>/vitest.setup.ts'],
};
