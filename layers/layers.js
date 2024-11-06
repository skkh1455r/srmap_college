var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_college_bounday_1 = new ol.format.GeoJSON();
var features_college_bounday_1 = format_college_bounday_1.readFeatures(json_college_bounday_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_college_bounday_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_college_bounday_1.addFeatures(features_college_bounday_1);
var lyr_college_bounday_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_college_bounday_1, 
                style: style_college_bounday_1,
                popuplayertitle: "college_bounday",
                interactive: true,
                title: '<img src="styles/legend/college_bounday_1.png" /> college_bounday'
            });
var format_college_road_network_2 = new ol.format.GeoJSON();
var features_college_road_network_2 = format_college_road_network_2.readFeatures(json_college_road_network_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_college_road_network_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_college_road_network_2.addFeatures(features_college_road_network_2);
var lyr_college_road_network_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_college_road_network_2, 
                style: style_college_road_network_2,
                popuplayertitle: "college_road_network",
                interactive: true,
                title: '<img src="styles/legend/college_road_network_2.png" /> college_road_network'
            });
var format_major_points_3 = new ol.format.GeoJSON();
var features_major_points_3 = format_major_points_3.readFeatures(json_major_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_major_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_major_points_3.addFeatures(features_major_points_3);
var lyr_major_points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_major_points_3, 
                style: style_major_points_3,
                popuplayertitle: "major_points",
                interactive: true,
                title: '<img src="styles/legend/major_points_3.png" /> major_points'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_college_bounday_1.setVisible(true);lyr_college_road_network_2.setVisible(true);lyr_major_points_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_college_bounday_1,lyr_college_road_network_2,lyr_major_points_3];
lyr_college_bounday_1.set('fieldAliases', {'id': 'id', });
lyr_college_road_network_2.set('fieldAliases', {'id': 'id', });
lyr_major_points_3.set('fieldAliases', {'id': 'id', });
lyr_college_bounday_1.set('fieldImages', {'id': '', });
lyr_college_road_network_2.set('fieldImages', {'id': 'TextEdit', });
lyr_major_points_3.set('fieldImages', {'id': 'TextEdit', });
lyr_college_bounday_1.set('fieldLabels', {'id': 'no label', });
lyr_college_road_network_2.set('fieldLabels', {'id': 'no label', });
lyr_major_points_3.set('fieldLabels', {'id': 'no label', });
lyr_major_points_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});