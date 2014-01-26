var svgViewer = {
	init: function(svgElementId) {
		containerElement = document.getElementById(svgElementId);
		
		if (!this.isSVGElement(containerElement)) return;
		
		this.liveElement = containerElement;
		
		this.hammertime = Hammer(document).on('touch', this.touchHandler);
	},
	touchHandler: function (evt) {
		if (evt.target.ownerSVGElement == svgViewer.liveElement) {
			svgViewer.activity('on');
		}
	},
	activity: function (option) {
		if (option == 'on' || option == 'off') {
			this.hammertime[option]('dragstart', this.dragstart);
			this.hammertime[option]('drag', this.drag);
			this.hammertime[option]('release', this.release);
		}
	},
	dragstart: function (evt) {
		svgViewer.lastTimeStamp = evt.gesture.timeStamp;
		
		console.log(svgViewer.lastTimeStamp);
	},
	
	drag: function (evt) {
		var G = evt.gesture;
		console.log(G.timeStamp);
	},
	release: function (evt) {
		svgViewer.activity('off');
	},
	isSVGElement: function (element) {
		return element.tagName.toLowerCase() == 'svg';
	}
};