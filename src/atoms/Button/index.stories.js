import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../..';
import { colors } from '../..'

const buttonStories = storiesOf('Button', module);
const sizes = ['xs', 'md', 'xl'];

buttonStories
.addDecorator(withInfo)
.add('simple button', () =>
  <Button
    size={select('size', sizes)}
    color={select('color', colors)}
  >
      {text('text', 'mon button')}
  </Button>
);
