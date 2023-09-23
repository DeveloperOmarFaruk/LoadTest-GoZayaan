/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 105.0, "minX": 0.0, "maxY": 3524.0, "series": [{"data": [[0.0, 105.0], [0.1, 105.0], [0.2, 105.0], [0.3, 105.0], [0.4, 106.0], [0.5, 106.0], [0.6, 106.0], [0.7, 106.0], [0.8, 106.0], [0.9, 106.0], [1.0, 106.0], [1.1, 106.0], [1.2, 106.0], [1.3, 106.0], [1.4, 106.0], [1.5, 106.0], [1.6, 106.0], [1.7, 106.0], [1.8, 106.0], [1.9, 106.0], [2.0, 106.0], [2.1, 106.0], [2.2, 106.0], [2.3, 106.0], [2.4, 106.0], [2.5, 106.0], [2.6, 106.0], [2.7, 106.0], [2.8, 107.0], [2.9, 107.0], [3.0, 107.0], [3.1, 107.0], [3.2, 107.0], [3.3, 107.0], [3.4, 107.0], [3.5, 107.0], [3.6, 107.0], [3.7, 107.0], [3.8, 107.0], [3.9, 107.0], [4.0, 107.0], [4.1, 107.0], [4.2, 107.0], [4.3, 107.0], [4.4, 107.0], [4.5, 107.0], [4.6, 107.0], [4.7, 107.0], [4.8, 107.0], [4.9, 107.0], [5.0, 107.0], [5.1, 107.0], [5.2, 107.0], [5.3, 107.0], [5.4, 107.0], [5.5, 108.0], [5.6, 108.0], [5.7, 108.0], [5.8, 108.0], [5.9, 108.0], [6.0, 108.0], [6.1, 108.0], [6.2, 108.0], [6.3, 108.0], [6.4, 108.0], [6.5, 108.0], [6.6, 108.0], [6.7, 108.0], [6.8, 108.0], [6.9, 108.0], [7.0, 108.0], [7.1, 108.0], [7.2, 108.0], [7.3, 108.0], [7.4, 108.0], [7.5, 108.0], [7.6, 108.0], [7.7, 108.0], [7.8, 108.0], [7.9, 108.0], [8.0, 109.0], [8.1, 109.0], [8.2, 109.0], [8.3, 109.0], [8.4, 109.0], [8.5, 109.0], [8.6, 109.0], [8.7, 109.0], [8.8, 109.0], [8.9, 109.0], [9.0, 109.0], [9.1, 109.0], [9.2, 109.0], [9.3, 109.0], [9.4, 109.0], [9.5, 109.0], [9.6, 109.0], [9.7, 109.0], [9.8, 109.0], [9.9, 109.0], [10.0, 109.0], [10.1, 109.0], [10.2, 109.0], [10.3, 109.0], [10.4, 109.0], [10.5, 109.0], [10.6, 109.0], [10.7, 109.0], [10.8, 109.0], [10.9, 109.0], [11.0, 109.0], [11.1, 109.0], [11.2, 110.0], [11.3, 110.0], [11.4, 110.0], [11.5, 110.0], [11.6, 110.0], [11.7, 110.0], [11.8, 110.0], [11.9, 110.0], [12.0, 110.0], [12.1, 110.0], [12.2, 110.0], [12.3, 110.0], [12.4, 110.0], [12.5, 110.0], [12.6, 110.0], [12.7, 110.0], [12.8, 110.0], [12.9, 110.0], [13.0, 110.0], [13.1, 110.0], [13.2, 110.0], [13.3, 110.0], [13.4, 110.0], [13.5, 110.0], [13.6, 110.0], [13.7, 110.0], [13.8, 110.0], [13.9, 110.0], [14.0, 110.0], [14.1, 110.0], [14.2, 110.0], [14.3, 110.0], [14.4, 110.0], [14.5, 110.0], [14.6, 110.0], [14.7, 110.0], [14.8, 110.0], [14.9, 110.0], [15.0, 110.0], [15.1, 110.0], [15.2, 110.0], [15.3, 110.0], [15.4, 110.0], [15.5, 110.0], [15.6, 110.0], [15.7, 110.0], [15.8, 110.0], [15.9, 110.0], [16.0, 110.0], [16.1, 110.0], [16.2, 110.0], [16.3, 110.0], [16.4, 110.0], [16.5, 110.0], [16.6, 110.0], [16.7, 110.0], [16.8, 110.0], [16.9, 111.0], [17.0, 111.0], [17.1, 111.0], [17.2, 111.0], [17.3, 111.0], [17.4, 111.0], [17.5, 111.0], [17.6, 111.0], [17.7, 111.0], [17.8, 111.0], [17.9, 111.0], [18.0, 111.0], [18.1, 111.0], [18.2, 111.0], [18.3, 111.0], [18.4, 111.0], [18.5, 111.0], [18.6, 111.0], [18.7, 111.0], [18.8, 111.0], [18.9, 111.0], [19.0, 111.0], [19.1, 111.0], [19.2, 111.0], [19.3, 111.0], [19.4, 111.0], [19.5, 111.0], [19.6, 111.0], [19.7, 111.0], [19.8, 111.0], [19.9, 111.0], [20.0, 111.0], [20.1, 111.0], [20.2, 111.0], [20.3, 111.0], [20.4, 111.0], [20.5, 111.0], [20.6, 111.0], [20.7, 111.0], [20.8, 111.0], [20.9, 111.0], [21.0, 111.0], [21.1, 111.0], [21.2, 111.0], [21.3, 111.0], [21.4, 111.0], [21.5, 111.0], [21.6, 111.0], [21.7, 111.0], [21.8, 111.0], [21.9, 111.0], [22.0, 111.0], [22.1, 111.0], [22.2, 111.0], [22.3, 111.0], [22.4, 111.0], [22.5, 111.0], [22.6, 111.0], [22.7, 111.0], [22.8, 111.0], [22.9, 111.0], [23.0, 111.0], [23.1, 111.0], [23.2, 111.0], [23.3, 111.0], [23.4, 111.0], [23.5, 111.0], [23.6, 111.0], [23.7, 111.0], [23.8, 111.0], [23.9, 111.0], [24.0, 111.0], [24.1, 111.0], [24.2, 111.0], [24.3, 111.0], [24.4, 111.0], [24.5, 111.0], [24.6, 111.0], [24.7, 112.0], [24.8, 112.0], [24.9, 112.0], [25.0, 112.0], [25.1, 112.0], [25.2, 112.0], [25.3, 112.0], [25.4, 112.0], [25.5, 112.0], [25.6, 112.0], [25.7, 112.0], [25.8, 112.0], [25.9, 112.0], [26.0, 112.0], [26.1, 112.0], [26.2, 112.0], [26.3, 112.0], [26.4, 112.0], [26.5, 112.0], [26.6, 112.0], [26.7, 112.0], [26.8, 112.0], [26.9, 112.0], [27.0, 112.0], [27.1, 112.0], [27.2, 112.0], [27.3, 112.0], [27.4, 112.0], [27.5, 112.0], [27.6, 112.0], [27.7, 112.0], [27.8, 112.0], [27.9, 112.0], [28.0, 112.0], [28.1, 112.0], [28.2, 112.0], [28.3, 112.0], [28.4, 112.0], [28.5, 112.0], [28.6, 112.0], [28.7, 112.0], [28.8, 112.0], [28.9, 112.0], [29.0, 112.0], [29.1, 112.0], [29.2, 112.0], [29.3, 112.0], [29.4, 112.0], [29.5, 112.0], [29.6, 112.0], [29.7, 112.0], [29.8, 112.0], [29.9, 112.0], [30.0, 112.0], [30.1, 112.0], [30.2, 112.0], [30.3, 112.0], [30.4, 112.0], [30.5, 112.0], [30.6, 112.0], [30.7, 112.0], [30.8, 112.0], [30.9, 112.0], [31.0, 112.0], [31.1, 112.0], [31.2, 112.0], [31.3, 112.0], [31.4, 112.0], [31.5, 112.0], [31.6, 112.0], [31.7, 112.0], [31.8, 112.0], [31.9, 112.0], [32.0, 112.0], [32.1, 112.0], [32.2, 112.0], [32.3, 112.0], [32.4, 113.0], [32.5, 113.0], [32.6, 113.0], [32.7, 113.0], [32.8, 113.0], [32.9, 113.0], [33.0, 113.0], [33.1, 113.0], [33.2, 113.0], [33.3, 113.0], [33.4, 113.0], [33.5, 113.0], [33.6, 113.0], [33.7, 113.0], [33.8, 113.0], [33.9, 113.0], [34.0, 113.0], [34.1, 113.0], [34.2, 113.0], [34.3, 113.0], [34.4, 113.0], [34.5, 113.0], [34.6, 113.0], [34.7, 113.0], [34.8, 113.0], [34.9, 113.0], [35.0, 113.0], [35.1, 113.0], [35.2, 113.0], [35.3, 113.0], [35.4, 113.0], [35.5, 113.0], [35.6, 113.0], [35.7, 113.0], [35.8, 113.0], [35.9, 113.0], [36.0, 113.0], [36.1, 113.0], [36.2, 113.0], [36.3, 113.0], [36.4, 113.0], [36.5, 113.0], [36.6, 113.0], [36.7, 113.0], [36.8, 113.0], [36.9, 113.0], [37.0, 113.0], [37.1, 113.0], [37.2, 113.0], [37.3, 113.0], [37.4, 113.0], [37.5, 113.0], [37.6, 113.0], [37.7, 113.0], [37.8, 113.0], [37.9, 113.0], [38.0, 114.0], [38.1, 114.0], [38.2, 114.0], [38.3, 114.0], [38.4, 114.0], [38.5, 114.0], [38.6, 114.0], [38.7, 114.0], [38.8, 114.0], [38.9, 114.0], [39.0, 114.0], [39.1, 114.0], [39.2, 114.0], [39.3, 114.0], [39.4, 114.0], [39.5, 114.0], [39.6, 114.0], [39.7, 114.0], [39.8, 114.0], [39.9, 114.0], [40.0, 114.0], [40.1, 114.0], [40.2, 114.0], [40.3, 114.0], [40.4, 114.0], [40.5, 114.0], [40.6, 114.0], [40.7, 114.0], [40.8, 114.0], [40.9, 114.0], [41.0, 114.0], [41.1, 114.0], [41.2, 114.0], [41.3, 114.0], [41.4, 114.0], [41.5, 114.0], [41.6, 114.0], [41.7, 114.0], [41.8, 114.0], [41.9, 114.0], [42.0, 114.0], [42.1, 114.0], [42.2, 114.0], [42.3, 114.0], [42.4, 114.0], [42.5, 114.0], [42.6, 114.0], [42.7, 114.0], [42.8, 114.0], [42.9, 114.0], [43.0, 114.0], [43.1, 114.0], [43.2, 114.0], [43.3, 114.0], [43.4, 114.0], [43.5, 114.0], [43.6, 114.0], [43.7, 115.0], [43.8, 115.0], [43.9, 115.0], [44.0, 115.0], [44.1, 115.0], [44.2, 115.0], [44.3, 115.0], [44.4, 115.0], [44.5, 115.0], [44.6, 115.0], [44.7, 115.0], [44.8, 115.0], [44.9, 115.0], [45.0, 115.0], [45.1, 115.0], [45.2, 115.0], [45.3, 115.0], [45.4, 115.0], [45.5, 115.0], [45.6, 115.0], [45.7, 115.0], [45.8, 115.0], [45.9, 115.0], [46.0, 115.0], [46.1, 115.0], [46.2, 115.0], [46.3, 115.0], [46.4, 115.0], [46.5, 115.0], [46.6, 115.0], [46.7, 115.0], [46.8, 115.0], [46.9, 115.0], [47.0, 115.0], [47.1, 115.0], [47.2, 115.0], [47.3, 115.0], [47.4, 115.0], [47.5, 115.0], [47.6, 115.0], [47.7, 115.0], [47.8, 115.0], [47.9, 115.0], [48.0, 115.0], [48.1, 115.0], [48.2, 115.0], [48.3, 115.0], [48.4, 115.0], [48.5, 115.0], [48.6, 115.0], [48.7, 115.0], [48.8, 115.0], [48.9, 115.0], [49.0, 115.0], [49.1, 116.0], [49.2, 116.0], [49.3, 116.0], [49.4, 116.0], [49.5, 116.0], [49.6, 116.0], [49.7, 116.0], [49.8, 116.0], [49.9, 116.0], [50.0, 116.0], [50.1, 116.0], [50.2, 116.0], [50.3, 116.0], [50.4, 116.0], [50.5, 116.0], [50.6, 116.0], [50.7, 116.0], [50.8, 116.0], [50.9, 116.0], [51.0, 116.0], [51.1, 116.0], [51.2, 116.0], [51.3, 116.0], [51.4, 116.0], [51.5, 116.0], [51.6, 116.0], [51.7, 116.0], [51.8, 116.0], [51.9, 116.0], [52.0, 116.0], [52.1, 116.0], [52.2, 116.0], [52.3, 116.0], [52.4, 116.0], [52.5, 116.0], [52.6, 116.0], [52.7, 116.0], [52.8, 116.0], [52.9, 116.0], [53.0, 116.0], [53.1, 116.0], [53.2, 116.0], [53.3, 116.0], [53.4, 116.0], [53.5, 116.0], [53.6, 116.0], [53.7, 117.0], [53.8, 117.0], [53.9, 117.0], [54.0, 117.0], [54.1, 117.0], [54.2, 117.0], [54.3, 117.0], [54.4, 117.0], [54.5, 117.0], [54.6, 117.0], [54.7, 117.0], [54.8, 117.0], [54.9, 117.0], [55.0, 117.0], [55.1, 117.0], [55.2, 117.0], [55.3, 117.0], [55.4, 117.0], [55.5, 117.0], [55.6, 117.0], [55.7, 117.0], [55.8, 117.0], [55.9, 117.0], [56.0, 117.0], [56.1, 117.0], [56.2, 117.0], [56.3, 117.0], [56.4, 117.0], [56.5, 117.0], [56.6, 117.0], [56.7, 117.0], [56.8, 117.0], [56.9, 117.0], [57.0, 117.0], [57.1, 117.0], [57.2, 117.0], [57.3, 117.0], [57.4, 117.0], [57.5, 117.0], [57.6, 117.0], [57.7, 117.0], [57.8, 117.0], [57.9, 118.0], [58.0, 118.0], [58.1, 118.0], [58.2, 118.0], [58.3, 118.0], [58.4, 118.0], [58.5, 118.0], [58.6, 118.0], [58.7, 118.0], [58.8, 118.0], [58.9, 118.0], [59.0, 118.0], [59.1, 118.0], [59.2, 118.0], [59.3, 118.0], [59.4, 118.0], [59.5, 118.0], [59.6, 119.0], [59.7, 119.0], [59.8, 119.0], [59.9, 119.0], [60.0, 119.0], [60.1, 119.0], [60.2, 119.0], [60.3, 119.0], [60.4, 119.0], [60.5, 119.0], [60.6, 119.0], [60.7, 119.0], [60.8, 119.0], [60.9, 119.0], [61.0, 119.0], [61.1, 119.0], [61.2, 119.0], [61.3, 119.0], [61.4, 119.0], [61.5, 119.0], [61.6, 119.0], [61.7, 120.0], [61.8, 120.0], [61.9, 120.0], [62.0, 120.0], [62.1, 120.0], [62.2, 120.0], [62.3, 120.0], [62.4, 120.0], [62.5, 120.0], [62.6, 120.0], [62.7, 120.0], [62.8, 120.0], [62.9, 120.0], [63.0, 120.0], [63.1, 120.0], [63.2, 120.0], [63.3, 120.0], [63.4, 120.0], [63.5, 120.0], [63.6, 120.0], [63.7, 121.0], [63.8, 121.0], [63.9, 121.0], [64.0, 121.0], [64.1, 121.0], [64.2, 121.0], [64.3, 121.0], [64.4, 121.0], [64.5, 121.0], [64.6, 121.0], [64.7, 121.0], [64.8, 121.0], [64.9, 121.0], [65.0, 121.0], [65.1, 122.0], [65.2, 122.0], [65.3, 122.0], [65.4, 122.0], [65.5, 122.0], [65.6, 122.0], [65.7, 122.0], [65.8, 122.0], [65.9, 122.0], [66.0, 122.0], [66.1, 122.0], [66.2, 122.0], [66.3, 122.0], [66.4, 122.0], [66.5, 122.0], [66.6, 122.0], [66.7, 123.0], [66.8, 123.0], [66.9, 123.0], [67.0, 123.0], [67.1, 123.0], [67.2, 123.0], [67.3, 123.0], [67.4, 123.0], [67.5, 123.0], [67.6, 123.0], [67.7, 123.0], [67.8, 123.0], [67.9, 123.0], [68.0, 123.0], [68.1, 124.0], [68.2, 124.0], [68.3, 124.0], [68.4, 124.0], [68.5, 124.0], [68.6, 124.0], [68.7, 124.0], [68.8, 124.0], [68.9, 124.0], [69.0, 124.0], [69.1, 124.0], [69.2, 124.0], [69.3, 124.0], [69.4, 124.0], [69.5, 124.0], [69.6, 124.0], [69.7, 125.0], [69.8, 125.0], [69.9, 125.0], [70.0, 125.0], [70.1, 125.0], [70.2, 125.0], [70.3, 125.0], [70.4, 125.0], [70.5, 125.0], [70.6, 125.0], [70.7, 125.0], [70.8, 125.0], [70.9, 125.0], [71.0, 125.0], [71.1, 125.0], [71.2, 125.0], [71.3, 125.0], [71.4, 125.0], [71.5, 125.0], [71.6, 126.0], [71.7, 126.0], [71.8, 126.0], [71.9, 126.0], [72.0, 126.0], [72.1, 126.0], [72.2, 126.0], [72.3, 126.0], [72.4, 126.0], [72.5, 126.0], [72.6, 126.0], [72.7, 126.0], [72.8, 126.0], [72.9, 126.0], [73.0, 126.0], [73.1, 126.0], [73.2, 126.0], [73.3, 126.0], [73.4, 126.0], [73.5, 126.0], [73.6, 127.0], [73.7, 127.0], [73.8, 127.0], [73.9, 127.0], [74.0, 127.0], [74.1, 127.0], [74.2, 127.0], [74.3, 127.0], [74.4, 127.0], [74.5, 127.0], [74.6, 127.0], [74.7, 127.0], [74.8, 127.0], [74.9, 127.0], [75.0, 128.0], [75.1, 128.0], [75.2, 128.0], [75.3, 128.0], [75.4, 128.0], [75.5, 128.0], [75.6, 128.0], [75.7, 128.0], [75.8, 128.0], [75.9, 128.0], [76.0, 128.0], [76.1, 128.0], [76.2, 128.0], [76.3, 128.0], [76.4, 128.0], [76.5, 129.0], [76.6, 129.0], [76.7, 129.0], [76.8, 129.0], [76.9, 129.0], [77.0, 129.0], [77.1, 129.0], [77.2, 129.0], [77.3, 129.0], [77.4, 129.0], [77.5, 129.0], [77.6, 129.0], [77.7, 129.0], [77.8, 129.0], [77.9, 130.0], [78.0, 130.0], [78.1, 130.0], [78.2, 130.0], [78.3, 130.0], [78.4, 130.0], [78.5, 130.0], [78.6, 130.0], [78.7, 130.0], [78.8, 130.0], [78.9, 130.0], [79.0, 130.0], [79.1, 130.0], [79.2, 130.0], [79.3, 130.0], [79.4, 131.0], [79.5, 131.0], [79.6, 131.0], [79.7, 131.0], [79.8, 131.0], [79.9, 131.0], [80.0, 131.0], [80.1, 131.0], [80.2, 131.0], [80.3, 131.0], [80.4, 131.0], [80.5, 132.0], [80.6, 132.0], [80.7, 132.0], [80.8, 132.0], [80.9, 132.0], [81.0, 132.0], [81.1, 132.0], [81.2, 132.0], [81.3, 132.0], [81.4, 132.0], [81.5, 132.0], [81.6, 133.0], [81.7, 133.0], [81.8, 133.0], [81.9, 133.0], [82.0, 133.0], [82.1, 133.0], [82.2, 133.0], [82.3, 133.0], [82.4, 133.0], [82.5, 134.0], [82.6, 134.0], [82.7, 134.0], [82.8, 134.0], [82.9, 134.0], [83.0, 134.0], [83.1, 135.0], [83.2, 135.0], [83.3, 135.0], [83.4, 135.0], [83.5, 135.0], [83.6, 136.0], [83.7, 136.0], [83.8, 136.0], [83.9, 137.0], [84.0, 138.0], [84.1, 138.0], [84.2, 139.0], [84.3, 139.0], [84.4, 139.0], [84.5, 139.0], [84.6, 140.0], [84.7, 140.0], [84.8, 141.0], [84.9, 141.0], [85.0, 142.0], [85.1, 142.0], [85.2, 142.0], [85.3, 142.0], [85.4, 142.0], [85.5, 143.0], [85.6, 143.0], [85.7, 144.0], [85.8, 146.0], [85.9, 146.0], [86.0, 146.0], [86.1, 147.0], [86.2, 148.0], [86.3, 149.0], [86.4, 149.0], [86.5, 150.0], [86.6, 152.0], [86.7, 153.0], [86.8, 155.0], [86.9, 155.0], [87.0, 158.0], [87.1, 164.0], [87.2, 167.0], [87.3, 192.0], [87.4, 196.0], [87.5, 199.0], [87.6, 201.0], [87.7, 203.0], [87.8, 206.0], [87.9, 208.0], [88.0, 214.0], [88.1, 217.0], [88.2, 217.0], [88.3, 218.0], [88.4, 219.0], [88.5, 225.0], [88.6, 228.0], [88.7, 229.0], [88.8, 232.0], [88.9, 233.0], [89.0, 234.0], [89.1, 235.0], [89.2, 236.0], [89.3, 237.0], [89.4, 237.0], [89.5, 241.0], [89.6, 242.0], [89.7, 254.0], [89.8, 254.0], [89.9, 255.0], [90.0, 259.0], [90.1, 260.0], [90.2, 263.0], [90.3, 264.0], [90.4, 266.0], [90.5, 281.0], [90.6, 290.0], [90.7, 291.0], [90.8, 292.0], [90.9, 294.0], [91.0, 299.0], [91.1, 300.0], [91.2, 301.0], [91.3, 302.0], [91.4, 303.0], [91.5, 305.0], [91.6, 307.0], [91.7, 309.0], [91.8, 312.0], [91.9, 314.0], [92.0, 319.0], [92.1, 324.0], [92.2, 325.0], [92.3, 325.0], [92.4, 326.0], [92.5, 329.0], [92.6, 329.0], [92.7, 331.0], [92.8, 333.0], [92.9, 333.0], [93.0, 337.0], [93.1, 338.0], [93.2, 338.0], [93.3, 340.0], [93.4, 340.0], [93.5, 342.0], [93.6, 343.0], [93.7, 345.0], [93.8, 346.0], [93.9, 346.0], [94.0, 351.0], [94.1, 351.0], [94.2, 352.0], [94.3, 352.0], [94.4, 353.0], [94.5, 353.0], [94.6, 355.0], [94.7, 355.0], [94.8, 356.0], [94.9, 357.0], [95.0, 360.0], [95.1, 361.0], [95.2, 363.0], [95.3, 363.0], [95.4, 369.0], [95.5, 371.0], [95.6, 372.0], [95.7, 378.0], [95.8, 379.0], [95.9, 380.0], [96.0, 384.0], [96.1, 391.0], [96.2, 398.0], [96.3, 433.0], [96.4, 444.0], [96.5, 477.0], [96.6, 479.0], [96.7, 494.0], [96.8, 516.0], [96.9, 533.0], [97.0, 543.0], [97.1, 547.0], [97.2, 566.0], [97.3, 605.0], [97.4, 756.0], [97.5, 768.0], [97.6, 769.0], [97.7, 776.0], [97.8, 781.0], [97.9, 786.0], [98.0, 793.0], [98.1, 794.0], [98.2, 802.0], [98.3, 814.0], [98.4, 1053.0], [98.5, 1146.0], [98.6, 1156.0], [98.7, 1592.0], [98.8, 1611.0], [98.9, 1619.0], [99.0, 1630.0], [99.1, 1632.0], [99.2, 1643.0], [99.3, 1861.0], [99.4, 2899.0], [99.5, 3310.0], [99.6, 3445.0], [99.7, 3472.0], [99.8, 3473.0], [99.9, 3481.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1051.0, "series": [{"data": [[600.0, 1.0], [700.0, 10.0], [2800.0, 1.0], [200.0, 42.0], [800.0, 2.0], [3300.0, 2.0], [3400.0, 4.0], [3500.0, 1.0], [1000.0, 1.0], [1100.0, 3.0], [300.0, 62.0], [1500.0, 1.0], [400.0, 6.0], [100.0, 1051.0], [1600.0, 6.0], [1800.0, 1.0], [500.0, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 16.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1161.0, "series": [{"data": [[0.0, 1161.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 23.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 16.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 33.70916666666669, "minX": 1.69513224E12, "maxY": 33.70916666666669, "series": [{"data": [[1.69513224E12, 33.70916666666669]], "isOverall": false, "label": "ThreadGozayaan", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69513224E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 106.0, "minX": 1.0, "maxY": 3305.0, "series": [{"data": [[2.0, 110.5], [3.0, 113.0], [4.0, 1044.3333333333333], [5.0, 118.25], [6.0, 784.0], [7.0, 2627.5], [8.0, 106.0], [9.0, 3305.0], [10.0, 344.57142857142856], [11.0, 113.0], [12.0, 988.0], [13.0, 109.0], [14.0, 806.0], [15.0, 106.0], [16.0, 117.0], [17.0, 112.5], [18.0, 152.27272727272725], [19.0, 551.75], [20.0, 151.7142857142857], [21.0, 451.5], [22.0, 618.8333333333334], [23.0, 667.2], [24.0, 310.6363636363636], [25.0, 116.0], [26.0, 254.66666666666669], [27.0, 399.42857142857144], [28.0, 132.92857142857144], [29.0, 150.36111111111111], [30.0, 139.21428571428575], [31.0, 138.26271186440675], [32.0, 144.2026143790849], [33.0, 130.3566433566434], [34.0, 147.92708333333337], [35.0, 134.65555555555548], [36.0, 130.74418604651163], [37.0, 136.5], [38.0, 131.1176470588235], [39.0, 159.16000000000003], [40.0, 159.35714285714283], [41.0, 144.12121212121215], [42.0, 119.0], [43.0, 186.69230769230768], [44.0, 130.33333333333334], [45.0, 167.49999999999997], [46.0, 138.32258064516128], [47.0, 269.42857142857144], [48.0, 123.0], [49.0, 220.53333333333333], [50.0, 195.94736842105263], [51.0, 110.0], [1.0, 1021.4999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[33.70916666666669, 179.8275000000002]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 51.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2360.0, "minX": 1.69513224E12, "maxY": 246162.55, "series": [{"data": [[1.69513224E12, 246162.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69513224E12, 2360.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69513224E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 179.8275000000002, "minX": 1.69513224E12, "maxY": 179.8275000000002, "series": [{"data": [[1.69513224E12, 179.8275000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69513224E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 150.27499999999972, "minX": 1.69513224E12, "maxY": 150.27499999999972, "series": [{"data": [[1.69513224E12, 150.27499999999972]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69513224E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 16.324166666666667, "minX": 1.69513224E12, "maxY": 16.324166666666667, "series": [{"data": [[1.69513224E12, 16.324166666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69513224E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 105.0, "minX": 1.69513224E12, "maxY": 3524.0, "series": [{"data": [[1.69513224E12, 3524.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69513224E12, 105.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69513224E12, 258.7000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69513224E12, 1629.94]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69513224E12, 116.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.69513224E12, 359.95000000000005]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69513224E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 113.0, "minX": 3.0, "maxY": 331.0, "series": [{"data": [[260.0, 115.0], [263.0, 115.0], [17.0, 113.0], [165.0, 118.0], [11.0, 331.0], [177.0, 116.0], [22.0, 142.0], [48.0, 116.0], [3.0, 120.0], [234.0, 115.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 263.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 111.0, "minX": 3.0, "maxY": 320.0, "series": [{"data": [[260.0, 114.0], [263.0, 113.0], [17.0, 111.0], [165.0, 117.0], [11.0, 320.0], [177.0, 115.0], [22.0, 126.5], [48.0, 114.0], [3.0, 117.0], [234.0, 114.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 263.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 20.0, "minX": 1.69513224E12, "maxY": 20.0, "series": [{"data": [[1.69513224E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69513224E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 20.0, "minX": 1.69513224E12, "maxY": 20.0, "series": [{"data": [[1.69513224E12, 20.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69513224E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 20.0, "minX": 1.69513224E12, "maxY": 20.0, "series": [{"data": [[1.69513224E12, 20.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69513224E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 20.0, "minX": 1.69513224E12, "maxY": 20.0, "series": [{"data": [[1.69513224E12, 20.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69513224E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

