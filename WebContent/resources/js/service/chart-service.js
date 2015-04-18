google.load("visualization", "1.1", {
	packages : [ "bar" ]
});

google.setOnLoadCallback(drawChart);

function drawChart(videos) {
	var chartData = prepareChartData(videos);
	
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Video Name');
	data.addColumn('number', 'Like Count');
	data.addColumn('number', 'Dislike Count');
	data.addRows(chartData);
	
	var options = {
		chart : {
			title : 'Videos Reviews',
			subtitle : 'Video name, like count, and dislike count',
		},
		height: 500
	};

	var chart = new google.charts.Bar(document
			.getElementById('columnchart_material'));

	chart.draw(data, options);
}

function drawHighChart(videos) {
	$('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Videos Reviews'
        },
        xAxis: {
            categories: getVideoName(videos)
        },
        credits: {
            enabled: false
        },
        plotOptions: {
        	series: {
        		stacking: 'normal'
        	}
        },
        series: [{
            name: 'Like Count',
            data: getLikeCount(videos),
            color: '#0000FF',
            shadow: true
        }, {
            name: 'Dislike Count',
            data: getDislikeCount(videos),
            color: '#FF0000',
            shadow: true
        }]
    });
}

function getVideoName(videos) {
	var videoNames = [];
	
	for (i = 0; i < videos.length; i++) {
		videoNames.push(videos[i].videoName);
	}
	
	return videoNames
}

function getLikeCount(videos) {
	var videoNames = [];
	
	for (i = 0; i < videos.length; i++) {
		videoNames.push(parseInt(videos[i].likeCount));
	}
	
	return videoNames
}

function getDislikeCount(videos) {
	var videoNames = [];
	
	for (i = 0; i < videos.length; i++) {
		videoNames.push(-parseInt(videos[i].dislikeCount));
	}
	
	return videoNames
}

function prepareChartData(videos) {
	var chartData = [];
	
	for (i = 0; i < videos.length; i++) {
		var temp = [videos[i].videoName,
		            parseInt(videos[i].likeCount),
		            -parseInt(videos[i].dislikeCount)
		            ];
		
		chartData.push(temp);
	}
	
	return chartData;
}











