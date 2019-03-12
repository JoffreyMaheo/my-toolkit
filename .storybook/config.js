import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.*.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withKnobs({
    escapeHTML: false,
  })
);
addDecorator(
  withBackgrounds([
    { name: 'default', value: 'white', default: true },
    { name: 'black', value: 'black' },
  ])
);
configure(loadStories, module);
