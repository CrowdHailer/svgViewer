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
			console.log(option);
		}
	},
	isSVGElement: function (element) {
		return element.tagName.toLowerCase() == 'svg';
	}
};