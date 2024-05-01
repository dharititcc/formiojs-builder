Formio.use([
    {
        components: {
            rating: sectionBreak
        }
    }
])
Formio.builder(document.getElementById("formio"), {}, {
    sanitizeConfig: {
        addTags: ["svg", "path"],
        addAttr: ["d", "viewBox"]
    }
}).then(() => {

});

Formio.createForm(document.getElementById('formio'), {
    components: [
        sectionBreak.schema()
    ]
}, {
    sanitizeConfig: {
        addTags: ["svg", "path"],
        addAttr: ["d", "viewBox"]
    }
})
