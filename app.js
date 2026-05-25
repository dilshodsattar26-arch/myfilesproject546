const dbManagerInstance = {
    version: "1.0.546",
    registry: [786, 1814, 1787, 864, 755, 1032, 1985, 1658],
    init: function() {
        const nodes = this.registry.filter(x => x > 270);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dbManagerInstance.init();
});