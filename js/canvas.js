window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "My Work stats"
	},	
	axisY: {
		title: "My projects",
		titleFontColor: "#4F81BC",
		lineColor: "#4F81BC",
		labelFontColor: "#4F81BC",
		
	},

	toolTip: {
		shared: true
	},
	legend: {
		cursor:"pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "column",
		name: "growth rate (bn)",
		legendText: "growth rate",
		showInLegend: true, 
		dataPoints:[
			{ label: "Jan", y: 97.8 },
			{ label: "feb", y: 120.25 },
			{ label: "mar", y: 140.20 },
			{ label: "april", y: 158.77 },
			{ label: "may", y: 160.50 },
			{ label: "june", y: 170.8 }
		]
	},
	{
		type: "column",	
		name: "pending rate",
		legendText: "pending rate",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints:[
			{ label: "jan", y: 10.46 },
			{ label: "feb", y: 2.27 },
			{ label: "mar", y: 3.99 },
			{ label: "aprl", y: 4.45 },
			{ label: "may", y: 2.92 },
			{ label: "jun", y: 3.1 }
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}

}
