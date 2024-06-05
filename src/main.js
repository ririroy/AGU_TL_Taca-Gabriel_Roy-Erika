window.onload = function () {
/* GRAPH 1 */
    pieData= [43.7,7.3,19.9,7.6,21.5];

    new RGraph.SVG.Pie({
        id: 'graph-svg-01',
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

/* GRAPH 2 */
    var graphData = [
        [169.9, 113.6], [169.5, 110.5], [169.2, 103.1], [165.7, 94.2],
        [167.1, 89.8], [166.7, 83.54], [166.5, 75.8], [162.7, 71.8],
        [162.7, 60], [162.7, 56], [162.7, 51.3], [158.9, 47.8]
    ];
    var labels = ['2002', '2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'];

    var barChart = new RGraph.SVG.Bar({
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
            adjustable: true,
            responsive: [
                {maxWidth:null,parentCss: {'float':'right'}},
                {maxWidth:700,parentCss: {'float':'none'}}
            ],
            tooltipsCss: {
                backgroundColor: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
                
            }
        }
    }).wave();

    /* GRAPH 3 */
    new RGraph.SemiCircularProgress({
        id: 'cvs-semi-circ',
        min: 0,
        max: 100,
        value: [20,3,45,18,10,4],
        options: {
            colors: ['#64E572','#FF81CE','#D5B5E7','#53F7FC'],
            centery: '+5',
            width: 50,
            radius: '-25',
            backgroundGrid: true,
            backgroundGridRadialsCount: 20,
            colorsStroke:        'transparent',
            labelsCenterIndex: 2,
            labelsCenterSize:    25,
            labelsCenterColor:   '#333',
            labelsCenterUnitsPost:   '%',
            scale: true,
            scaleMax: 100,
            scaleLabelsSize: 9,
            scaleUnitsPost: '%',
            scaleLabelsCount: 20,
            scaleLabelsOffsetr: 5,
            tooltips: '%{key}',
            tooltipsFormattedKeyLabels: ['Richard','John','Lucy','Pob'],
            tooltipsFormattedUnitsPost: '%'
        }
    }).draw();


    /* GRAPH 4 */

    window.addEventListener('resize', function () {
        barChart.draw();
    });

    function drawMap() {
        var mapContainer = document.getElementById('map');
        var containerWidth = mapContainer.offsetWidth;
        var containerHeight = containerWidth * 0.6; // Maintain aspect ratio 16:9

        var mapData = [{
            type: 'choropleth',
            locationmode: 'USA-states',
            locations: [
                'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY',
                'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH',
                'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
            ],
            z: [
                65, 44.5, 64.5, 74.2, 62.7, 59.4, 72.2, 68, 64.8, 67.2, 68.1, 76.4, 58.8, 62.7, 65.7, 50.5, 54.9, 67.2,
                68.7, 65.5, 65.4, 66.8, 59, 50.4, 64.5, 59.1, 64.9, 58, 63.8, 69.7, 69.5, 68.5, 65.6, 62.7, 59.2, 57.2,
                66, 51.5, 65.9, 65.7, 70.2, 72.5, 66.4, 62.5, 53.6, 67.3, 59.6, 55, 59.4, 50.4, 73.2
            ],
            text: [
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia',
                'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
                'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
                'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
                'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
                'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ],
            colorscale: [
                [0, 'rgb(255,255,204)'], [0.2, 'rgb(255,237,160)'], [0.4, 'rgb(254,217,118)'],
                [0.6, 'rgb(254,178,76)'], [0.8, 'rgb(253,141,60)'], [1, 'rgb(227,26,28)']
            ],
            colorbar: {
                title: {
                    text: 'Consommation (Gallons)',
                    font: {
                        color: 'white'
                    }
                },
                tickfont: {
                    color: 'white'
                },
                thickness: 10
            },
            marker: {
                line: {
                    color: 'rgb(255,255,255)',
                    width: 2
                }
            }
        }];

        var mapLayout = {
            title: {
                text: 'Consommation médiane de soda par capita en Gallons',
                font: {
                    color: 'white'
                }
            },
            geo: {
                scope: 'usa',
                showlakes: true,
                lakecolor: 'rgb(255,255,255)',
                bgcolor: 'rgba(0,0,0,0)'
            },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            width: containerWidth,
            height: containerHeight
        };

        var mapConfig = {
            displayModeBar: false,
            responsive: true
        };

        Plotly.newPlot('map', mapData, mapLayout, mapConfig);
    }

    drawMap();

    window.addEventListener('resize', function () {
        drawMap();
    });




    const defaultColors = [
        [120, 130, '#009900'], // Green
        [130, 140, '#00ff00'],
        [140, 150, '#d0ff00'],
        [150, 160, '#d0ff00'],
        [160, 170, '#ffd500'],
        [170, 180, '#ff9100'], // Yellow
        [180, 190, '#ff4d00'],
        [190, 200, '#FF0000'],
    ];

    // Function to draw the background image
    function drawBackgroundImage(context, imageSrc, callback) {
        const image = new Image();
        image.src = imageSrc;
        image.onload = function () {
            console.log('Image loaded');
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clear the canvas
            context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
            callback(); // Draw the meter after the image loads
        };
        image.onerror = function () {
            console.error('Failed to load image');
        };
    }

    // Create the Meter chart specifying the min/max/value
    const meter = new RGraph.Meter({
        id: 'cvs',
        min: 120,
        max: 200,
        value: 20,
        options: {
            backgroundColor: 'transparent', // Explicitly set to transparent
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            marginBottom: 15,
            centerpinStroke: 'rgba(5,5,5,1)',
            centerpinFill: 'rgba(16,51,158,1)',
            colorsRanges: defaultColors,
            labelsCount: 8,
            anglesStart: RGraph.PI + 0.5,
            anglesEnd: RGraph.TWOPI - 0.5,
            linewidthSegments: 0,
            textSize: 16,
            colorsStroke: 'black',
            segmentsRadiusStart: 150,
            needleRadius: 210,
            border: 0,
            tickmarksSmallCount: 0,
            tickmarksLargeCount: 0,
            adjustable: true,
            ondraw: function () {
                const value = meter.value;
                const ranges = [
                    { value: 120, range: [119, 124] },
                    { value: 130, range: [125, 134] },
                    { value: 140, range: [135, 144] },
                    { value: 150, range: [145, 154] },
                    { value: 160, range: [155, 164] },
                    { value: 170, range: [165, 174] },
                    { value: 180, range: [175, 184] },
                    { value: 190, range: [185, 194] },
                    { value: 200, range: [195, 200] } // Updated range for 200
                ];

                console.log('Needle value:', value);
                document.querySelectorAll('ul li').forEach(li => li.style.display = 'none');

                for (const range of ranges) {
                    if (value >= range.range[0] && value <= range.range[1]) {
                        const li = document.querySelector(`.li-${range.value}`);
                        if (li) {
                            li.style.display = 'block';
                        }
                        break;
                    }
                }
            }
        }
    });

    // Draw the background image first, then draw the meter
    const canvas = document.getElementById('cvs');
    const context = canvas.getContext('2d');

    // Ensure the canvas has a transparent background
    canvas.style.backgroundColor = 'transparent';

    drawBackgroundImage(context, '/graph_anime_bg.png', () => {
        meter.draw();
        console.log('Meter drawn');
    });

    // This function facilitates changing the colors to a smooth gradient and vice-versa
    function toggleGradient() {
        // The meter.isGradient variable doesn't have any special RGraph meaning - it's
        // just a regular JavaScript variable that we're setting here that allows us to
        // track what style of color the chart is using.
        if (!meter.isGradient) {
            meter.set('colorsRanges', [[120, 200, 'Gradient({colors:["#009900", "#00ff00", "#d0ff00", "#d0ff00", "#ffd500", "#ff9100", "#ff4d00", "#FF0000"], x1:50, y1:0, x2:350, y2:0})']]);
        } else {
            meter.set('colorsRanges', defaultColors);
        }

        meter.isGradient = !meter.isGradient;

        // Reset this flag so that the colors are parsed again;
        meter.colorsParsed = false;

        RGraph.redraw();
    }

    document.getElementById('toggleGradientBtn').onclick = toggleGradient;

    // Add event listeners for the needle
    meter.on('draw', function () {
        const value = meter.value;
        console.log('Needle value during draw:', value);
        document.querySelectorAll('ul li').forEach(li => li.style.display = 'none');

        if (value <= 120) {
            document.querySelector('.li-120').style.display = 'flex';
        } else if (value <= 130) {
            document.querySelector('.li-130').style.display = 'flex';
        } else if (value <= 140) {
            document.querySelector('.li-140').style.display = 'flex';
        } else if (value <= 150) {
            document.querySelector('.li-150').style.display = 'flex';
        } else if (value <= 160) {
            document.querySelector('.li-160').style.display = 'flex';
        } else if (value <= 170) {
            document.querySelector('.li-170').style.display = 'flex';
        } else if (value <= 180) {
            document.querySelector('.li-180').style.display = 'flex';
        } else if (value <= 190) {
            document.querySelector('.li-190').style.display = 'flex';
        } else if (value <= 200) {
            document.querySelector('.li-200').style.display = 'flex';
        }
    });

    meter.on('click', function (e, shape) {
        const mouseXY = RGraph.getMouseXY(e);
        const mouseX = mouseXY[0];
        const mouseY = mouseXY[1];
        const coords = meter.coords[0];
        const angle = Math.atan2(mouseY - coords[1], mouseX - coords[0]) + Math.PI / 2;
        if (angle < 0) {
            angle += 2 * Math.PI;
        }
        const value = (angle / (2 * Math.PI)) * (meter.max - meter.min) + meter.min;
        meter.value = value;
        meter.draw();
    });


    /* GRAPH 6 */
    var lineData = [
        [15, 21, 32, 45, 70, 55, 42, 18],
        [18, 20, 25, 40, 50, 52, 45, 35]
    ];

    function drawLineChart() {
        new RGraph.Line({
            id: 'line-chart',
            data: lineData,
            options: {
                gutterLeft: 45,
                gutterRight: 15,
                labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
                tooltips: [
                    ['15 units', '21 units', '32 units', '45 units', '70 units', '55 units', '42 units', '18 units'],
                    ['18 units', '20 units', '25 units', '40 units', '50 units', '52 units', '45 units', '35 units']
                ],
                colors: ['#F44336', '#2196F3'],
                linewidth: 2,
                filled: false,
                filledColors: ['#F44336', '#2196F3']
            }
        }).draw();
    }

    drawLineChart();

    function change() {
        // Change the data
        lineData[0][1] = Math.random() * 100;
        lineData[1][3] = Math.random() * 100;

        // Redraw the chart with the new data
        drawLineChart();
    }
};