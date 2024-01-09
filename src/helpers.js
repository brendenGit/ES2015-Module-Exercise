const choice = (items) => {
    const randChoice = Math.floor(Math.random() * items.length);
    return items[randChoice];
}

const remove = (items, item) => {
    if (!items.includes(item)) return undefined
    const idx = items.indexOf(item);
    items.splice(idx, 1);
}

export { choice, remove }