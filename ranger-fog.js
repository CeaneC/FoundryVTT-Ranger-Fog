import { registerSettings } from "./module/settings.js";

Hooks.once('ready', () => {
    console.log('Ranger Fog | Readying ranger-fog')
    if(!game.modules.get('lib-wrapper')?.active && game.user.isGM) {
        ui.notifications.error("Module ranger-fog requires the 'libWrapper' module. Please install and activate it.");
    } else {
        registerSettings();
        libWrapper.register('ranger-fog', 'SightLayer.prototype.fogExploration', getFogExplorationForUser, "WRAPPER");
    }    
});

function getFogExplorationForUser(wrapped, ...args) {
    return wrapped(...args) && game.settings.get("ranger-fog", `enabled-for-${game.user.data._id}`);
}