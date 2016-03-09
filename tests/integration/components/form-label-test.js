import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-label', 'Integration | Component | {{form-label}}', {
  integration: true
});

test('It renders', function(assert) {
  this.render(hbs`{{form-label}}`);
  assert.equal(this.$('label').length, 1);
});

test('It has Bootstrap classes', function(assert) {
  this.render(hbs`{{form-label}}`);
  assert.equal(this.$('label').hasClass('control-label') && this.$('label').hasClass('col-md-3') && this.$('label').hasClass('col-sm-3') && this.$('label').hasClass('col-xs-12') && this.$('label').hasClass('col-md-3'),true);
});

test('It shows the label value', function(assert) {
  this.render(hbs`{{form-label "Foo"}}`);
  assert.equal(this.$('label').text().trim(), 'Foo');
});

test('For can be bound', function(assert) {
  this.render(hbs`{{form-label for="abc"}}`);
  assert.equal(this.$('label').attr('for'), 'abc');
});

test('Form can be bound', function(assert) {
  this.render(hbs`{{form-label form="form_1"}}`);
  assert.equal(this.$('label').attr('form'), 'form_1');
});

test('Alternatively can yield to block', function(assert) {
  this.render(hbs`{{#form-label}}TESTING{{/form-label}}`);
  assert.equal(this.$('label').text().trim(), 'TESTING');
});

test('Required adds a * to the label', function(assert) {
  this.render(hbs`{{form-label "Test" required=true}}`);
  assert.equal(this.$('label:contains(*)').length, 1);
});
