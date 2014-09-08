var first = {
    "event_id": "9423663431",
    "event_name": "Mike's Toga Party",
    "event_address": "Larkspur Landing",
    "event_address2": "690 Gateway Blvd.",
    "description": "Come to Mike's Toga Party. We have many drinks and many togas. Everything Greek is awesome. Later, we will watch My Big Fat Greek Wedding. Come on in and join us. It's super sick!!",
    "event_url": "http://www.eventbrite.com/e/cleanedison-bpi-baes-bootcamp-ca-san-francisco-dec-08-2014-tickets-9423663431?aff=ebapi",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94080",
    "country": "US",
    "event_start": "2014-12-08T16:00:00Z",
    "event_end": "2014-12-14T01:00:00Z",
    "venue_name": "San Francisco",
    "lat": 37.758939,
    "lon": -122.404448,
    "color": "one",
};
var second = {
    "event_id": "9462425369",
    "event_name": "CleanEdison BPI Building Analyst Training CA - San Francisco Oct 13, 2014",
    "event_address": "Larkspur Landing",
    "event_address2": "690 Gateway Blvd.",
    "description": "CleanEdison's BPI Building Analyst course aligns with the professional standards of excellence set forth by the Building Performance Institute (BPI). This BPI training will provide individuals with the knowledge, skills and certification needed to excel in the home energy performance industry. \nWhy take this course: \n\nBPI Building Analyst certification is the nation's most widely recognized energy auditor certification\nThis BPI Building Analyst course covers the fundamental knowledge recommended before taking advanced BPI Certifications that will allow your company to apply for BPI Accreditation. Most individuals take the BPI Building Analyst / Envelope Professional Combo to take advantage of BPI Accreditation\nThe classroom portion of the course can be taken either in person or online\nYou will gain energy auditing skills that can immediately be applied to the field\nThe home energy performance industry is one of the fastest growing sectors in the nation\n\nWho Should Take This Course: \nThere are no prerequisites. Our BPI Building Analyst training is ideal for: \n\nHome inspectors\nGeneral contractors\nHVAC technicians\nInsulation professionals\nHome builders\nAnyone interested in a career in energy auditing.\n\nWhat You'll Learn: \nOur energy audit training incorporates BPI Training standards, which emphasize the 'house-as-a-system' approach to energy auditing. This model recognizes that all systems are interconnected, from gas and electric appliances to heating and cooling systems, to the building envelope, foundation, walls, roof, doors and windows. \nCourse Objectives: \n\nHave an understanding of the various types systems within a home, their components and functions and how they inter-operate\nKnow the process of completing a BPI energy audit to Building Analyst Standards and be able to communicate this to Customers\nBe able to conduct safety and performance tests to assess system condition, identify savings opportunities and prepare a \"workscope\" with meaningful, cost effective solutions\nPass the BPI Building Analyst written and field exams\n\nAgenda: \nDay 1 Course Outline: \nIntroductions & Paperwork \n\nSection 1: What is BPI?\nSection 2: Building Science Basics\nSection 3: ExteriorAudit - (Building Shell)\nSection 4: ExteriorAudit - (Windows & Doors)\nSection 5: Exterior Audit - (Air Leakages)\n\nDay 2 Course Outline: \n\nSection 6: Insulation Audit\nSection 7: Lighting and Appliances Audit\nSection 8: Heating Systems Audit\nSection 9: Cooling Systems Audit\nSection 10: Water Heating System Audit\nSection 11: Health & Safety\nSection 12: Assessment Process - The Audit\nSection 13: Assessment Process - Overview\u00a0\n\nDay 3 Course Outline: \n\nAM - Field Training - Audit Demonstration\nPM - Field Training - Candidate Audit Hands-On\n\nDay 4 Course Outline: \n\n8:00 - 10:00 Review for Written Test\n10:00 - 12:00 Online Test\n1:00 - 5:00 Field Test (2hr Slots)\n\nDay 5 (6 if necessary) Course Outline: \n\n9:00am - 5:00pm Field Test (2 hr Slots)\n\nWhat's Included: \n\n4-day course includes 18 hours of classroom instruction (live or online) and 10 hours of live field BPI training\nOnline materials for self-study before the course\nCleanEdison BPI Building Analyst Essentials Textbook ($99 value)\nA copy of the BPI Technical Standards\nLive review session with practice questions\nAll scheduling and fees for both the written exam and field test\nCleanEdison Pass Guarantee: if you do not pass the certification exam on your first try, you may re-take the course at no additional cost\n\nBPI Certification \nCleanEdison's BPI Building Analyst course prepares participants to earn the nationally recognized BPI Building Analyst certification.",
    "event_url": "http://www.eventbrite.com/e/cleanedison-bpi-building-analyst-training-ca-san-francisco-oct-13-2014-tickets-9462425369?aff=ebapi",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94080",
    "country": "US",
    "event_start": "2014-10-13T15:00:00Z",
    "event_end": "2014-10-19T00:00:00Z",
    "venue_name": "San Francisco",
    "lat": 37.765385,
    "lon": -122.417838,
    "color": "two",
};
var third = {
    "event_id": "11983724643",
    "event_name": "Restaurant Series: How to Run a Profitable Restaurant - Prime Cost Management",
    "event_address": "455 Market St.",
    "event_address2": "6th Floor",
    "description": "This workshop will highlight the importance of understanding and controlling ingredient and labor costs to achieve optimal operating levels.\u00a0 We will provide you the basic tools to manage these critical costs to industry standards.\u00a0 Strategies to control these costs will include POS and bookkeeping integrity, benchmarking, inventory management, cost/price analysis, scheduling and labor costing, and employee benefit management. \n$40 registration Fee. Presented by the San Francisco Small Business Development Center. \u00a0Sorry, no refunds.",
    "event_url": "http://www.eventbrite.com/e/restaurant-series-how-to-run-a-profitable-restaurant-prime-cost-management-tickets-11983724643?aff=ebapi",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94105",
    "country": "US",
    "event_start": "2014-10-01T01:00:00Z",
    "event_end": "2014-10-01T03:30:00Z",
    "venue_name": "SBA Entrepreneur Center",
    "lat": 37.769320,
    "lon": -122.389342,
    "color": "three"
};

var spots = [first, second, third];

var display = [];
var map;

require([
         "esri/map", "esri/Color", "esri/InfoTemplate","esri/geometry/Circle", "esri/symbols/SimpleFillSymbol",
         "esri/symbols/SimpleLineSymbol",
         "esri/graphic", "esri/layers/GraphicsLayer", "esri/geometry/Point",
         "dojo/dom", "dojo/dom-attr", "dojo/domReady!"
         ], function(
                     Map, Color, InfoTemplate, Circle, SimpleFillSymbol, SimpleLineSymbol,
                     Graphic, GraphicsLayer,Point,
                     dom, domAttr
                     ) {
        map = new Map("mapDiv", {
                      basemap: "streets",
                      center: [-122.389857, 37.771898],
                      slider: false,
                      zoom: 12
                      });
        map.on("load",function(){
               
               
               
               var sfs = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                                              new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                                                                   new Color([255,0,0]), 4),new Color([255,177,0,1]));
               
               //        var symbol = new SimpleFillSymbol();//.outline.setColor("black");
               var gl = new GraphicsLayer({ id: "circles" });
               
               for(var x = 0; x< spots.length; x++){
               var point = new Point(spots[x]["lon"],spots[x]["lat"]);
               console.log(spots[x]["lon"]);
               console.log(spots[x]["lat"]);
               //        var infoWindow = new esri.dijit.InfoWindow({}, dojo.create("div"));
               //        infoWindow.startup();
               
               var circle = new Circle({
                                       center: point,
                                       geodesic: true,
                                       radius: 100
                                       });
               //        display.append(
               //            {"point": point},
               //            {"circle": circle}
               //        )
               var infotemplate = new InfoTemplate(spots[x]["event_name"], spots[x]["description"]);
               var graphic = new Graphic(circle, sfs, {age: spots[x]["color"]}, infotemplate);
               gl.add(graphic);
               
               
               setTimeout(function(){
                          for(var y = 0; y<gl.graphics.length; y++){
                          var g = gl.graphics[y];
                          console.log(g);
                          if (g.attributes.age === "one") {
                          g.symbol.setColor("blue");
                          }
                          if (g.attributes.age === "two") {
                          g.symbol.setColor("yellow");
                          }
                          if (g.attributes.age === "three") {
                          g.symbol.setColor("yellow");
                          }
                          //            gl.refreshInterval(.001);
                          }
                          
                          },10000)
               }
               //demojunk
               
               var sfsmall = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                                                  new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                                                                       new Color([255,0,0]), 4),new Color([0,153,255,1]));
               
               var point = new Point(-122.398526, 37.763756);
               
               //        var infoWindow = new esri.dijit.InfoWindow({}, dojo.create("div"));
               //        infoWindow.startup();
               
               var circle = new Circle({
                                       center: point,
                                       geodesic: true,
                                       radius: 40
                                       });
               //        display.append(
               //            {"point": point},
               //            {"circle": circle}
               //        )
               //        var infotemplate = new InfoTemplate(spots[x]["event_name"], spots[x]["description"]);
               var graphic = new Graphic(circle, sfsmall, null, infotemplate);
               gl.add(graphic);
               
               
               
               
               
               // var geodesic = dom.byId("geodesic");
               map.addLayer(gl);
               //map.on("click", function(e) {
               var point=new Point(-122.389757, 37.771898);
               var radius = map.extent.getWidth() / 10;
               var circle = new Circle({
                                       center: point,
                                       geodesic: true,
                                       radius: 100
                                       });
               console.log(radius)
               
               });
        });