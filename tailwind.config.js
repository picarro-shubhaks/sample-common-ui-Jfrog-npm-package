const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const path = require('path');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    path.join(
      path.dirname(require.resolve('@picarro-common-ui/picarro-login-ui-mui')),
      '**/*.{html,ts,js,jsx,tsx}'
    ),
    path.join(
      path.dirname(
        require.resolve('@picarro-common-ui/picarro-account-ui-mui')
      ),
      '**/*.{html,ts,js,jsx,tsx}'
    ),
    path.join(
      path.dirname(
        require.resolve('@picarro-common-ui/picarro-login-data-access')
      ),
      '**/*.{html,ts,js,jsx,tsx}'
    ),
    path.join(
      path.dirname(require.resolve('@picarro-common-ui/picarro-utils-ui-mui')),
      '**/*.{html,ts,js,jsx,tsx}'
    ),
    path.join(
      path.dirname(
        require.resolve('@picarro-common-ui/user-management-ui-mui')
      ),
      '**/*.{html,ts,js,jsx,tsx}'
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('./tailwind-workspace-preset')],
};
