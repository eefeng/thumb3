'use strict';

xtag.register('x-praise', {
    content: '<div class="hand" id="thumb">' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger thumb"></div>' + '<div class="arm"></div>\n' + '</div>',
    lifecycle: {
        created: function created() {},
        inserted: function inserted() {},
        removed: function removed() {
            console.log(1);
        },
        attributeChanged: function attributeChanged() {}
    },
    methods: {
        someMethod: function someMethod() {}
    },
    accessors: {
        someAccessor: {
            // links to the 'some-accessor' attribute
            attribute: {},
            set: function set() {},
            get: function get() {}
        }
    },
    events: {
        tap: function tap() {},
        focus: function focus() {}
    }
});
