import React from 'react';
import ReactDOM from 'react-dom';

import Polls from './polls';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Polls />, document.getElementById('main'));
});
