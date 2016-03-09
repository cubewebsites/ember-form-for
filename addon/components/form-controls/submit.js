import ButtonComponent from './button';

import { invokeAction } from 'ember-invoke-action';

export default ButtonComponent.extend({
  type: 'submit',
  classNames: ['btn','btn-primary'],

  click(e) {
    e.preventDefault();
    invokeAction(this, 'submit', ...arguments);
  },

  attributeBindings: [
    'formaction',
    'formenctype',
    'formmethod',
    'formtarget',
    'formnovalidate'
  ]
});
