import Ember from 'ember';
import layout from '../../templates/components/form-fields/text-field';

const { set } = Ember;

const TextFieldComponent = Ember.Component.extend({
  tagName: '',
  layout,
  classNames: ['form-control'],

  control: 'form-controls/input',

  update(object, propertyName, value) {
    set(object, propertyName, value);
  }
});

TextFieldComponent.reopenClass({
  positionalParams: ['propertyName']
});

export default TextFieldComponent;
