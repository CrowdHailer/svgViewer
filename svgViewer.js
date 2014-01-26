var svgViewer = {
	init: function(svgElementId) {
		containerElement = document.getElementById(svgElementId);
		
		if (!this.isSVGElement(containerElement)) return;
		
		this.svgElement = containerElement;
	},
	isSVGElement: function (element) {
		return element.tagName.toLowerCase() == 'svg';
	}
};