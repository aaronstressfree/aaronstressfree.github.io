function createScripts(resourcesPath) {
  let sources = [
    `${resourcesPath}/js/TimelineComponent.js`,
    `${resourcesPath}/js/TimelineTimeline.js`,
    `${resourcesPath}/js/TimelineReverseTimeline.js`,
    `${resourcesPath}/js/instances.js`
  ];
  loadScripts(sources);
}

createScripts(timelineResourcesPath);