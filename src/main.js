// src/main.js



window.onload = function () {

    // GRAPH 1
    pieData= [43.7,7.3,19.9,7.6,21.5];

    new RGraph.SVG.Pie({
        id: 'graph1-container',
        data: pieData,
        options: {
            labels: ['Eau','Jus','Boissons gazeuses','Autres', 'Lait'],
            shadow: true,
            colorsStroke: 'rgba(0,0,0,1)',
            linewidth: 0,
            exploded: [,,25],
            colors: ['#81B29A','#F4F1DE','#3D405B','#E07A5F','#fcc','#F2CC8F'],
            tooltips: '%{key}',
            tooltipsFormattedKeyLabels: ['Eau,','Jus','Boissons gazeuses','Autres','Lait'],
            tooltipsFormattedUnitsPost: '%',
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
            }
        }
    }).draw();

// fin graph 1

    
    var graphData = [
        [169.9, 113.6], [169.5, 110.5], [169.2, 103.1], [165.7, 94.2],
        [167.1, 89.8], [166.7, 83.54], [166.5, 75.8], [162.7, 71.8],
        [162.7, 60], [162.7, 56], [162.7, 51.3], [158.9, 47.8]
    ];
    var labels = ['2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'];
    

    new RGraph.SVG.Bar({
        id: 'chart-container',
        data: graphData,
        options: {
            marginLeft: 35,
            marginRight: 5,
            marginBottom: 35,
            marginTop: 45,
            backgroundGridVlines: true,
            backgroundGridBorder: false,
            responsive: true,
            maintainAspectRatio: false,
            textSize: 11,
            yaxis: false,
            yaxisScaleUnitsPre: '',  // Default
            yaxisScaleUnitsPost: 'l',
            yaxisScalePoint: '.',    // Default
            yaxisScaleThousand: ',', // Default
            yaxisScaleDecimals: 0,
            xaxisLinewidth: 3,
            xaxisTickmarks: false,
            xaxisLabels: labels,
            colors: ['#B31942', '#996034'],
            marginInner: 9,
            marginInnerGrouped: 2,
            titleSubtitle: 'Données répértoriées chez Les Américains et Canadiens',
            title: 'Consommation de soda par Capita',
            titleBold: true,
            titleSize: 16,
            tooltips: '%{key}',
            tooltipsFormattedUnitsPre: 'Litres',
            tooltipsFormattedUnitsPost: ',000',
            tooltipsFormattedKeyLabels: ['Canadiens', 'Américains'],
            tooltipsCss: {
                backgroundColor: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
            }
        }
    }).wave();

    


};