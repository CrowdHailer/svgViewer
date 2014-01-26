var svgViewer = {
	init: function(svgElementId) {
		containerElement = document.getElementById(svgElementId);
		
		if (!this.isSVGElement(containerElement)) return;
		
		this.liveElement = containerElement;
		
		this.hammertime = Hammer(document).on('touch', this.touchHandler);
	},
	touchHandler: function(evt) {
		if (evt.target.ownerSVGElement != svgViewer.liveElement) return;
		console.log('correct target');
	},
	isSVGElement: function (element) {
		return element.tagName.toLowerCase() == 'svg';
	}
};