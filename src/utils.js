const getFormData = (form) => {
    const res = {}
    
    form.querySelectorAll("input").forEach(inp => {
        res[inp.name] = inp.value
    })
    form.querySelectorAll("select").forEach(inp => { res[inp.name] = inp.value })
    form.querySelectorAll("textarea").forEach(inp => { res[inp.name] = inp.value })

    return res
}

export { getFormData }