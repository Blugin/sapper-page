const orgs = [{
    "name" : "Organization",
    "url": "https://github.com/organization",
    "plugins": [
        "Humanoid-PMMP",
        "GeometryAPI-PMMP",
        "ChunkLoader-PMMP",
        "VirtualChest-PMMP",
        "Lifespan-PMMP",
        "WriteCheck-PMMP",
        "StartKit-PMMP",
        "DustBin-PMMP",
        "RewardBox-PMMP",
        "TargetSelector-PMMP",
        "Lullaby-PMMP",
        "RealisticCompass-PMMP",
        "MakePluginPlus-PMMP",
        "ItemPopup-PMMP",
        "IgnoreCase-PMMP",
        "HotBox-PMMP"
    ]
}];

let plugins = [];
orgs.forEach(org => {
    org.plugins.forEach(plugin => {
        plugins.push({
            orgName: org.name,
            name: plugin.replace('-PMMP', ''),
            fullname: plugin,
            img: `https://rawgit.com/PresentKim/SVG-files/master/plugin-icons/${plugin.replace('-PMMP', '').toLowerCase()}.svg`
        });
    });
});

export default plugins;