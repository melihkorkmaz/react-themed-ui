import { configure } from '@storybook/react';
import rtui from '../src'

import './storybook.scss'

function loadStories() {
  require('../src/stories/alert');
  require('../src/stories/button');
  require('../src/stories/button-group');
}

configure(loadStories, module);