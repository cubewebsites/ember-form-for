import Ember from 'ember';
import layout from '../templates/components/form-for';

const {
    set,
    Component
    } = Ember;

const FormForComponent = Component.extend({
    layout,
    classNameBindings: ['formClassName'],
    formLayout: 'bootstrap3-horizontal',
    formLayoutClasses: function () {
        let layoutClasses = {};
        switch (this.get('formLayout')) {
            case 'bootstrap3-horizontal':
                layoutClasses.form = 'form-horizontal';
                layoutClasses.field = 'form-group';
                layoutClasses.label = 'control-label col-md-3 col-sm-3 col-xs-12';
                layoutClasses.inputWrapper = 'col-sm-3 col-md-6';
                layoutClasses.input = 'form-control col-md-7 col-xs-12';
                break;
            case 'bootstrap3-vertical':
                layoutClasses.input = 'form-control';
                break;
        }
        return layoutClasses;
    }.property('formLayout'),
    formClassName: function () {
        return this.get('formLayoutClasses.form');
    }.property('formLayoutClasses'),
    tagName: 'form',
    submit: (object) => object.save(),
    reset: (object) => object.rollback(),

    update(object, propertyName, value) {
        set(object, propertyName, value);
    }
});

FormForComponent.reopenClass({
    positionalParams: ['object']
});

export default FormForComponent;
