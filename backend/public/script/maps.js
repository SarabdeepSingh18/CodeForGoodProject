"use strict"
const searchInput = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_btn");

let map, searchManager;

searchBtn.addEventListener("click", ()=>{
    map.entities.clear();
    geocodeQuery(searchInput.value);
});

function getMap(){
    map = new Microsoft.Maps.Map('#map', {
        // You need your key.
    credentials: 'Am2iijz1hvaDL29-Y03q6PQcKuWoXa47rxhMpmpDDoz1FaSE5h15KiVU5Cfuv1u5',
    }   );

    var locations = [
  {latitude: 18.975, longitude: 72.825833},
  {latitude: 28.666667, longitude: 77.216667},
  {latitude: 12.983333, longitude: 77.583333},
  {latitude: 17.375278, longitude: 78.474444},
  {latitude: 23.033333, longitude: 72.616667},
  {latitude: 13.083333, longitude: 80.283333},
  {latitude: 22.569722, longitude: 88.369722},
  {latitude: 20.966667, longitude: 72.9},
  {latitude: 18.533333, longitude: 73.866667},
  {latitude: 24.583333, longitude: 86.85},
  {latitude: 26.85, longitude: 80.916667},
  {latitude: 26.466667, longitude: 80.35},
  {latitude: 23.3, longitude: 82.3},
  {latitude: 22.716667, longitude: 75.833333},
  {latitude: 19.2, longitude: 72.966667},
  {latitude: 23.266667, longitude: 77.4},
  {latitude: 17.7, longitude: 83.3},
  {latitude: 18.6279288, longitude: 73.8009829},
  {latitude: 23.3, longitude: 82.666667},
  {latitude: 22.3, longitude: 73.2},
  {latitude: 28.666667, longitude: 77.433333},
  {latitude: 30.9, longitude: 75.85},
  {latitude: 27.183333, longitude: 78.016667},
  {latitude: 20.0110224, longitude: 73.7903373},
  {latitude: 28.433333, longitude: 77.316667},
  {latitude: 28.983333, longitude: 77.7},
  {latitude: 25.731111, longitude: 75.5925},
  {latitude: 19.235433, longitude: 73.129889},
  {latitude: 19.4258788, longitude: 72.8224901},
  {latitude: 25.333333, longitude: 83},
  {latitude: 30.216667, longitude: 78.783333},
  {latitude: 26.596, longitude: 79.9701},
  {latitude: 23.8, longitude: 86.45},
  {latitude: 31.633056, longitude: 74.865556},
  {latitude: 19.033049, longitude: 73.029662},
  {latitude: 25.45, longitude: 81.85},
  {latitude: 23.35, longitude: 85.333333},
  {latitude: 22.589167, longitude: 88.310278},
  {latitude: 10.9925, longitude: 76.961389},
  {latitude: 23.166667, longitude: 79.95},
  {latitude: 26.223611, longitude: 78.179167},
  {latitude: 16.516667, longitude: 80.616667},
  {latitude: 26.286667, longitude: 73.03},
  {latitude: 9.933333, longitude: 78.116667},
  {latitude: 30.316667, longitude: 78.1},
  {latitude: 29.825278, longitude: 78.671389},
  {latitude: 26.183333, longitude: 91.733333},
  {latitude: 30.7343, longitude: 76.7933},
  {latitude: 17.683333, longitude: 75.916667},
  {latitude: 15.364708, longitude: 75.123955},
  {latitude: 28.35, longitude: 79.416667},
  {latitude: 28.833333, longitude: 78.783333},
  {latitude: 12.307222, longitude: 76.649722},
  {latitude: 27.6928, longitude: 79.6766},
  {latitude: 27.883333, longitude: 78.083333},
  {latitude: 23.9, longitude: 78.433333},
  {latitude: 10.805, longitude: 78.685556},
  {latitude: 20.233333, longitude: 85.833333},
  {latitude: 15.7, longitude: 73.916667},
  {latitude: 19.295233, longitude: 72.854390},
  {latitude: 18, longitude: 79.583333},
  {latitude: 8.506944, longitude: 76.956944},
  {latitude: 16.3, longitude: 80.45},
  {latitude: 19.3, longitude: 73.066667},
  {latitude: 29.966667, longitude: 77.55},
  {latitude: 26.755, longitude: 83.373889},
  {latitude: 28.016667, longitude: 73.3},
  {latitude: 20.933333, longitude: 77.75},
  {latitude: 28.5726442, longitude: 77.3547609},
  {latitude: 22.8, longitude: 86.183333},
  {latitude: 21.216667, longitude: 81.433333},
  {latitude: 20.5, longitude: 85.833333},
  {latitude: 27.15, longitude: 78.416667},
  {latitude: 9.966667, longitude: 76.233333},
  {latitude: 21.766667, longitude: 72.15},
  {latitude: 30.3255646, longitude: 78.0436813},
  {latitude: 24.75, longitude: 87.733333},
  {latitude: 24.233333, longitude: 87.283333},
  {latitude: 19.15, longitude: 77.333333},
  {latitude: 16.7, longitude: 74.216667},
  {latitude: 26.45, longitude: 74.633333},
  {latitude: 17.333333, longitude: 76.833333},
  {latitude: 22.466667, longitude: 70.066667},
  {latitude: 23.183333, longitude: 75.766667},
  {latitude: 28.75, longitude: 77.283333},
  {latitude: 26.716111, longitude: 88.423611},
  {latitude: 25.433333, longitude: 78.583333},
  {latitude: 19.216667, longitude: 73.15},
  {latitude: 14.433333, longitude: 79.966667},
  {latitude: 32.733333, longitude: 74.866667},
  {latitude: 16.860446, longitude: 74.565518},
  {latitude: 15.866667, longitude: 74.5},
  {latitude: 12.863889, longitude: 74.835278},
  {latitude: 13.076667, longitude: 80.088611},
  {latitude: 8.733333, longitude: 77.7},
  {latitude: 20.55, longitude: 74.533333},
  {latitude: 24.783333, longitude: 85},
  {latitude: 21.048611, longitude: 76.534444},
  {latitude: 26.6978, longitude: 79.9216},
  {latitude: 22.508621, longitude: 88.2532182},
  {latitude: 11.1, longitude: 77.35},
  {latitude: 14.4596984, longitude: 75.9289654951128},
  {latitude: 11.25, longitude: 75.766667},
  {latitude: 24.766667, longitude: 74.2},
  {latitude: 15.833333, longitude: 78.05},
  {latitude: 22.449089, longitude: 88.391473},
  {latitude: 23.783333, longitude: 85.966667},
  {latitude: 22.610000, longitude: 88.400000},
  {latitude: 15.15, longitude: 76.933333},
  {latitude: 30.326667, longitude: 76.400278},
  {latitude: 24.833333, longitude: 87.8},
  {latitude: 23.836389, longitude: 91.275},
  {latitude: 26.169722, longitude: 83.872778},
  {latitude: 29.466667, longitude: 77.683333},
  {latitude: 22.871389, longitude: 88.408889},
  {latitude: 22.694167, longitude: 88.374444},
  {latitude: 18.4, longitude: 76.583333},
  {latitude: 20.9, longitude: 74.783333},
  {latitude: 28.9, longitude: 76.566667},
  {latitude: 22.35, longitude: 82.683333},
  {latitude: 25.35, longitude: 74.633333},
  {latitude: 19.316667, longitude: 84.783333},
  {latitude: 26.116667, longitude: 85.4},
  {latitude: 19.083333, longitude: 74.733333},
  {latitude: 27.5, longitude: 77.683333},
  {latitude: 8.880556, longitude: 76.591667},
  {latitude: 13.115556, longitude: 80.101667},
  {latitude: 16.983333, longitude: 81.783333},
  {latitude: 14.466667, longitude: 78.816667},
  {latitude: 22.671111, longitude: 88.374722},
  {latitude: 22.083333, longitude: 82.15},
  {latitude: 27.883333, longitude: 79.916667},
  {latitude: 18.8, longitude: 80.816667},
  {latitude: 23.283333, longitude: 85.433333},
  {latitude: 13.929930, longitude: 75.568101},
  {latitude: 19.6, longitude: 83.883333},
  {latitude: 21.516667, longitude: 70.466667},
  {latitude: 10.516667, longitude: 76.216667},
  {latitude: 27.566667, longitude: 76.6},
  {latitude: 23.240556, longitude: 87.869444},
  {latitude: 23.733333, longitude: 86.85},
  {latitude: 16.933333, longitude: 82.216667},
  {latitude: 26.050556, longitude: 83.058889},
  {latitude: 19.266667, longitude: 76.783333},
  {latitude: 13.342222, longitude: 77.101667},
  {latitude: 29.166667, longitude: 75.716667},
  {latitude: 11.948880, longitude: 79.712141},
  {latitude: 25.183333, longitude: 85.516667},
  {latitude: 29.388889, longitude: 76.968056},
  {latitude: 26.166667, longitude: 85.9},
  {latitude: 15.166667, longitude: 74.033333},
  {latitude: 23.724444, longitude: 92.7175},
  {latitude: 22.966667, longitude: 76.066667},
  {latitude: 16.7, longitude: 74.466667},
  {latitude: 13.65, longitude: 79.416667},
  {latitude: 29.683333, longitude: 76.983333},
  {latitude: 26.7769, longitude: 79.0239},
  {latitude: 19.2015607, longitude: 73.2004771},
  {latitude: 22.652080, longitude: 88.419070},
  {latitude: 13.157778, longitude: 80.304167},
  {latitude: 11.93, longitude: 79.83},
  {latitude: 27.616667, longitude: 75.15},
  {latitude: 8.783333, longitude: 78.133333},
  {latitude: 27.9161, longitude: 79.0231},
  {latitude: 25.15, longitude: 82.583333},
  {latitude: 16.2, longitude: 77.366667},
  {latitude: 29.85, longitude: 78.543889},
  {latitude: 17.25, longitude: 80.15},
  {latitude: 18.116667, longitude: 83.416667},
  {latitude: 25.533333, longitude: 87.583333},
  {latitude: 29.966667, longitude: 78.166667},
  {latitude: 27.1268, longitude: 79.3921},
  {latitude: 28.728310, longitude: 77.276926},
  {latitude: 8.193889, longitude: 77.431389},
  {latitude: 13.22526165, longitude: 79.1055442299247},
  {latitude: 28.4, longitude: 77.85},
  {latitude: 10.8, longitude: 79.15}
]

      locations.forEach(function (location) {
        var loc = new Microsoft.Maps.Location(location.latitude, location.longitude);

        // Create a pushpin at the current location
        var pin = new Microsoft.Maps.Pushpin(loc);
        map.entities.push(pin);
      });




};

function geocodeQuery(query){
    if (!searchManager) {
        Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
            searchManager = new Microsoft.Maps.Search.SearchManager(map);
            geocodeQuery(query);
        });
    } else {
        let searchRequest = {
            where: query,
            callback: function (r) {
                if (r && r.results && r.results.length > 0) {
                    var pin = new Microsoft.Maps.Pushpin(r.results[0].location);
                    map.entities.push(pin);

                    map.setView({ bounds: r.results[0].bestView });
                };
            },
            errorCallback: function (e) {
                alert("No results found.");
            }
        };
        searchManager.geocode(searchRequest);
    };
};
