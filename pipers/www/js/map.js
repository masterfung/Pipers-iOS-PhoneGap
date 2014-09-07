var map;
    require(["esri/map",
        "dojo/domReady!",
        "esri/geometry/Point",
        "esri/geometry/Circle",
        "esri/symbols/SimpleFillSymbol",
        "esri/graphic"
    ], function(Map, Circle, Point, SimpleFillSymbol, Graphic) {
        map = new Map("mapDiv", {
          center: [-56.049, 38.485],
          zoom: 3,
          basemap: "streets"
        });
        var pointThing = new Point([-56.049, 38.485]);
        var pointThing2 = new Point([-50,38.485]);
        var sf = new Point([37.767488, -122.400972]);
        var circleThing = new Circle(pointThing, {"radius":400});

        var symbol = new SimpleFillSymbol().setColor("red").outline.setColor("blue");
        var graphic = new Graphic(circle, symbol);
//        var gl = new GraphicsLayer({ id: "circles" });
        console.log(circleThing.contains(pointThing2));
        console.log(circleThing.getCentroid());
        map.add(graphic);

    });
