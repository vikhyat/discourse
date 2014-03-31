Discourse.ShowBadgeComponent = Ember.Component.extend({
  tagName : "span",
  classNameBindings: [":badge", "badge.typeClass"],
  attributeBindings: ["data-badge-name"],
  "data-badge-name": Em.computed.alias("badge.name")
});
