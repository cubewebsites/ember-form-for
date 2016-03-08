import Ember  from 'ember';
import layout from '../templates/components/form-label';

const FormLabelComponent =  Ember.Component.extend({
  tagName: 'label',
  layout,
  classNames: ['control-label', 'col-md-3', 'col-sm-3', 'col-xs-12'],

  attributeBindings: [
    'for',
    'form'
  ]
});

FormLabelComponent.reopenClass({
  positionalParams: ['label']
});

export default FormLabelComponent;
