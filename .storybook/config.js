import { configure } from '@storybook/react';
import rtui from '../src'

import './storybook.scss'

function loadStories() {
  require('../src/stories/elements/button');
}

configure(loadStories, module);