/**
* Class representing the TimelineTimeline timeline.
*
* Made with Flow
*/

class TimelineTimeline {
    /**
    * @constructor
    *
    * @param {HTMLElement} rootElement
    *   Root Element of the DOM containing the elements that will be animated in this timeline.
    *
    * @param {String} resourcesPath
    *   The path pointing to the root of the Timeline folder.
    */
    constructor(rootElement, resourcesPath) {
        this.rootElement = rootElement;
        this.resourcesPath = resourcesPath;
        this.imagesFolderPath = resourcesPath + "/img";
        this.loadFillImages();
    }

    /**
    * Returns the timeline's duration in milliseconds.
    */
    get duration() { return 1000 }

	loadFillImages() {
        let pattern;
	}
  
    loadSVGAnimations() {
        this.loadSVGShapeAnimations()
        this.loadSVGShapeMaskAnimations()
    }

    loadSVGShapeAnimations() {
        // Path Animations
        let path;         
        path = this.rootElement.getElementById("rectangle_2-path")
        path.d = "M0,0c0,0,195,0,195,0 0,0,0,41,0,41 0,0,-195,0,-195,0 0,0,0,-41,0,-41zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_9-path")
        path.d = "M0,3c-0,-1.646,1.354,-3,3,-3 0,0,90,0,90,0 1.646,0,3,1.354,3,3 0,0,0,32,0,32 0,1.646,-1.354,3,-3,3 0,0,-90,0,-90,0 -1.646,0,-3,-1.354,-3,-3 0,0,0,-32,0,-32zM0,3"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("mask_2-path")
        path.d = "M6.5,0c0,0,-5.3,6.6,-5.3,6.6 0,0,-1.2,1.4,-1.2,1.4 0,0,1.2,1.4,1.2,1.4 0,0,5.2,6.6,5.2,6.6 0,0,3.6,0,3.6,0 0,0,-0.1,-0.1,-0.1,-0.1 0,0,-6.4,-7.9,-6.4,-7.9 0,0,6.5,-8,6.5,-8 0,0,-3.5,0,-3.5,0 0,0,0,0,0,0zM6.5,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("mask_copy_1-path")
        path.d = "M0.001,0c0,0,246.999,1.346,246.999,1.346 0,0,0,535.654,0,535.654 0,0,-246.999,-0,-246.999,-0 0,0,-0,-537,-0,-537zM0.001,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("line_copy-path")
        path.d = "M-0,0.5c0,0,227,0,227,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("line_copy_2-path")
        path.d = "M-0,0.5c0,0,227,0,227,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("line_copy_3-path")
        path.d = "M-0,0.5c0,0,227,0,227,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("line_copy_4-path")
        path.d = "M-0,0.5c0,0,227,0,227,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_14-path")
        path.d = "M0,1c-0,-0.549,0.451,-1,1,-1 0,0,71,0,71,0 0.549,0,1,0.451,1,1 0,0,0,22,0,22 0,0.549,-0.451,1,-1,1 0,0,-71,0,-71,0 -0.549,0,-1,-0.451,-1,-1 0,0,0,0,0,0 0,0,0,-22,0,-22zM0,1"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_13-path")
        path.d = "M0,1c-0,-0.549,0.451,-1,1,-1 0,0,112,0,112,0 0.549,0,1,0.451,1,1 0,0,0,22,0,22 0,0.549,-0.451,1,-1,1 0,0,-112,0,-112,0 -0.549,0,-1,-0.451,-1,-1 0,0,0,0,0,0 0,0,0,-22,0,-22zM0,1"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_12-path")
        path.d = "M0,1c-0,-0.549,0.451,-1,1,-1 0,0,99,0,99,0 0.549,0,1,0.451,1,1 0,0,0,22,0,22 0,0.549,-0.451,1,-1,1 0,0,-99,0,-99,0 -0.549,0,-1,-0.451,-1,-1 0,0,0,0,0,0 0,0,0,-22,0,-22zM0,1"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_11-path")
        path.d = "M0,1c-0,-0.549,0.451,-1,1,-1 0,0,84,0,84,0 0.549,0,1,0.451,1,1 0,0,0,22,0,22 0,0.549,-0.451,1,-1,1 0,0,-84,0,-84,0 -0.549,0,-1,-0.451,-1,-1 0,0,0,0,0,0 0,0,0,-22,0,-22zM0,1"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("mask_copy-path")
        path.d = "M0.001,0c0,0,246.999,0.509,246.999,0.509 0,0,0,202.491,0,202.491 0,0,-246.999,-0,-246.999,-0 0,0,-0,-203,-0,-203zM0.001,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("line-path")
        path.d = "M-0,0.5c0,0,227,0,227,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_1-path")
        path.d = "M0,3c-0,-1.646,1.354,-3,3,-3 0,0,70,0,70,0 1.646,0,3,1.354,3,3 0,0,0,22,0,22 0,1.646,-1.354,3,-3,3 0,0,-70,0,-70,0 -1.646,0,-3,-1.354,-3,-3 0,0,0,-22,0,-22zM0,3"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle_10-path")
        path.d = "M0,1c-0,-0.549,0.451,-1,1,-1 0,0,84,0,84,0 0.549,0,1,0.451,1,1 0,0,0,22,0,22 0,0.549,-0.451,1,-1,1 0,0,-84,0,-84,0 -0.549,0,-1,-0.451,-1,-1 0,0,0,0,0,0 0,0,0,-22,0,-22zM0,1"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("rectangle-path")
        path.d = "M0,0c0,0,280,0,280,0 0,0,0,848,0,848 0,0,-280,-0,-280,-0 0,0,0,-848,0,-848zM0,0"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("oval_copy-path")
        path.d = "M4.5,9c2.485,0,4.5,-2.015,4.5,-4.5 0,-2.485,-2.015,-4.5,-4.5,-4.5 -2.485,0,-4.5,2.015,-4.5,4.5 0,2.485,2.015,4.5,4.5,4.5zM4.5,9"
        path.innerHTML = `

`
         
        path = this.rootElement.getElementById("mask_1-path")
        path.d = "M0,0c0,0,1554,0,1554,0 0,0,0,916,0,916 0,0,-1554,0,-1554,0 0,0,0,-916,0,-916zM0,0"
        path.innerHTML = `

`

        // Gradient Animations
        let defs;    } 

    loadSVGShapeMaskAnimations() {    } 

    /**
    * @return
    * Returns the list of svg shapes that are animated in this timeline.
    */
    get allShapes() {
        return [
            this.rootElement.querySelector("#Timeline .bitmap-svg"),
            this.rootElement.querySelector("#Timeline .mask_1-svg"),
            this.rootElement.querySelector("#Timeline .rectangle-svg"),
            this.rootElement.querySelector("#Timeline .oval_copy-svg"),
            this.rootElement.querySelector("#Timeline .mask_copy-svg"),
            this.rootElement.querySelector("#Timeline .rectangle_10-svg"),
            this.rootElement.querySelector("#Timeline .rectangle_1-svg"),
            this.rootElement.querySelector("#Timeline .line-svg"),
            this.rootElement.querySelector("#Timeline .mask_copy_1-svg"),
            this.rootElement.querySelector("#Timeline .line_copy-svg"),
            this.rootElement.querySelector("#Timeline .line_copy_2-svg"),
            this.rootElement.querySelector("#Timeline .line_copy_3-svg"),
            this.rootElement.querySelector("#Timeline .line_copy_4-svg"),
            this.rootElement.querySelector("#Timeline .rectangle_11-svg"),
            this.rootElement.querySelector("#Timeline .rectangle_12-svg"),
            this.rootElement.querySelector("#Timeline .rectangle_13-svg"),
            this.rootElement.querySelector("#Timeline .rectangle_14-svg"),
            this.rootElement.querySelector("#Timeline .mask_2-svg"),
            this.rootElement.querySelector("#Timeline .rectangle_9-svg"),
            this.rootElement.querySelector("#Timeline .rectangle_2-svg"),
        ]
    }

    artboardAnimation() {
        // Workaround for Safari bug
        return this.rootElement.querySelector('#Timeline.flow-artboard').animate({
        backgroundPosition: ['0px', '1px'],
        }, {
            delay: 0,
            duration: 1000,
        });
    }
    alertAnimation0() {
        return this.rootElement.querySelector('#Timeline .alert').animate({
            opacity: [0.03, 1],

        }, {
            delay: 0,
            duration: 750,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }
    statusAnimation0() {
        return this.rootElement.querySelector('#Timeline .status').animate({
            top: ['505px', '550px'],

        }, {
            delay: 0,
            duration: 750,
            easing: 'ease-in-out',
            composite: 'add',
            fill: 'forwards',
        });
    }

    /**
    * Creates and returns all animations for this timeline.
    */
    createAllAnimations() {
        return [
            this.artboardAnimation(),
            this.alertAnimation0(),
            this.statusAnimation0(),
        ]
    }
}

Object.freeze(TimelineTimeline)
