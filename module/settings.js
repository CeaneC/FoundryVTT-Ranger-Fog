let moduleName = "ranger-fog";

export const registerSettings = function() {
    let users = game.users.map(u => u);

    users.forEach(user => {
        game.settings.register(moduleName, `enabled-for-${user._id}`, {
            name: user.name,
            hint: getHint(user.name),
            scope: "world",
            config: true,
            default: false,
            type: Boolean,
            onChange: () => {
                canvas.draw();
            }
        });
    });
}

function getHint(username) {
    return `${game.i18n.localize(`${moduleName}.EFU.hint-prefix`)}${username}${game.i18n.localize(`${moduleName}.EFU.hint-suffix`)}`;
}