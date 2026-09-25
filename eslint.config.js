import openreachtechConfig from '@openreachtech/eslint-config'

export default [
  ...openreachtechConfig,

  // Turn off some rules temporary
  {
    rules: {
      camelcase: 'off',
      'sort-imports': 'off',

      'jest/max-expects': 'off',
      'jest/max-nested-describe': 'off',
      // TODO: Update @openreachtech/eslint-rules-default-jest with the latest version of eslint-plugin-jest
      'jest/no-deprecated-functions': 'off',

      'jsdoc/check-indentation': 'off',
      'jsdoc/check-tag-names': 'off',
      'jsdoc/no-undefined-types': 'off',
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/valid-types': 'off',
    },
  },

  // Enable rules for specific files
  {
    rules: {
      'no-shadow': [
        'error',
        {
          builtinGlobals: true, // false
          hoist: 'all', // 'functions'
          ignoreOnInitialization: true, // false
          allow: [ // []
            'it',
            'length',
            'name',
            'status',
            'target',
            'require', // add it from openreachtech-eslint-config
          ],
        },
      ],
    },
  },
]
