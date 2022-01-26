var map = L.map('mapid').setView([38.6270,-90.1994], 11);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Kienlen",
        "Review": "5 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.28976440429688,
          38.67210881558816
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Market",
        "Review": "4 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.23002624511719,
          38.65441572712308
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Porters Fried Cicken",
        "Review": "3 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.32615661621094,
          38.601846852838094
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Tower Grove",
        "Review": "2 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26504516601562,
          38.62169881367633
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant": "Friedleys",
        "Review": "1 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.25131225585938,
          38.59540719940386
        ]
      }
    }
  ]
};

var feat = L.geoJSON(geojsonFeature).addTo(map);

feat.bindPopup("<b>Hello world! I'm marker 1</b><br>I am a popup.").openPopup();

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "RiverName": "Mississippi River"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.36941528320312,
            38.26514122031372
          ],
          [
            -90.36666870117188,
            38.33196157898413
          ],
          [
            -90.32546997070312,
            38.40410147066251
          ],
          [
            -90.274658203125,
            38.471868887577145
          ],
          [
            -90.23071289062499,
            38.566421609878674
          ],
          [
            -90.20736694335936,
            38.59648051509767
          ],
          [
            -90.17303466796875,
            38.64369051578083
          ],
          [
            -90.19912719726561,
            38.688725613296725
          ],
          [
            -90.21011352539062,
            38.72194763292809
          ],
          [
            -90.18814086914062,
            38.7615795117574
          ],
          [
            -90.14419555664062,
            38.788345355085625
          ],
          [
            -90.11810302734375,
            38.82366088659335
          ],
          [
            -90.11398315429686,
            38.85788953063659
          ],
          [
            -90.16204833984375,
            38.87499767781738
          ],
          [
            -90.24444580078125,
            38.904927027872844
          ],
          [
            -90.3076171875,
            38.92095542046727
          ],
          [
            -90.40237426757811,
            38.9476613635683
          ],
          [
            -90.450439453125,
            38.96154447940714
          ],
          [
            -90.50262451171875,
            38.92095542046727
          ]
        ]
      }
    }
  ]
};

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var states = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Forest Park",
        "Has Baseball Field": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30109405517577,
              38.64664010894782
            ],
            [
              -90.30418395996094,
              38.6329636990003
            ],
            [
              -90.27053833007812,
              38.630013542950316
            ],
            [
              -90.26676177978516,
              38.63242731602095
            ],
            [
              -90.26779174804688,
              38.638327308061875
            ],
            [
              -90.27122497558594,
              38.64208159560713
            ],
            [
              -90.28324127197266,
              38.64583568648869
            ],
            [
              -90.30109405517577,
              38.64664010894782
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Tower Grove",
        "Has Baseball Field": "No"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.26907920837402,
              38.6052006101789
            ],
            [
              -90.24255752563475,
              38.603054223536205
            ],
            [
              -90.2413558959961,
              38.60721278935162
            ],
            [
              -90.26839256286621,
              38.60982853792072
            ],
            [
              -90.26907920837402,
              38.6052006101789
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Carondelet Park",
        "Has Baseball Field": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.25963783264159,
              38.55700884254432
            ],
            [
              -90.257728099823,
              38.55908948904362
            ],
            [
              -90.25519609451294,
              38.56028079984389
            ],
            [
              -90.27002334594727,
              38.567747016416256
            ],
            [
              -90.27285575866699,
              38.56393850398323
            ],
            [
              -90.25963783264159,
              38.55700884254432
            ]
          ]
        ]
      }
    }
  ]
};

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties["Has Baseball Field"]) {
            case 'Yes': return {color: "#990000"};
            case 'No':   return {color: "#000099"};
        }
    }
}).addTo(map);

