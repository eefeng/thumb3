xtag.register('x-praise', {
    content: '<div class="hand" id="thumb">' +
    '<div class="finger"></div>' +
    '<div class="finger"></div>' +
    '<div class="finger"></div>' +
    '<div class="finger"></div>' +
    '<div class="finger thumb"></div>' +
    '<div class="arm"></div>\n' +
    '</div>',
    lifecycle:{
        created: function(){},
        inserted: function(){},
        removed: function(){ console.log(1)},
        attributeChanged: function(){}
    },
    methods: {
        someMethod: function(){}
    },
    accessors: {
        someAccessor: {
            // links to the 'some-accessor' attribute
            attribute: {},
            set: function(){},
            get: function(){}
        }
    },
    events: {
        tap: function(){},
        focus: function(){}
    }
});