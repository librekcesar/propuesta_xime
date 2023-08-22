var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cps_estados_pet_match_1 = new ol.format.GeoJSON();
var features_cps_estados_pet_match_1 = format_cps_estados_pet_match_1.readFeatures(json_cps_estados_pet_match_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cps_estados_pet_match_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cps_estados_pet_match_1.addFeatures(features_cps_estados_pet_match_1);
var lyr_cps_estados_pet_match_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cps_estados_pet_match_1, 
                style: style_cps_estados_pet_match_1,
                interactive: true,
                title: '<img src="styles/legend/cps_estados_pet_match_1.png" /> cps_estados_pet_match'
            });
var format_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2 = new ol.format.GeoJSON();
var features_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2 = format_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2.readFeatures(json_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2.addFeatures(features_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2);
var lyr_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2, 
                style: style_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2,
                interactive: true,
                title: '<img src="styles/legend/poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2.png" /> poligonos_zipcodes_v23_1_copia — poligonos_zipcodes_v23_1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cps_estados_pet_match_1.setVisible(true);lyr_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cps_estados_pet_match_1,lyr_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2];
lyr_cps_estados_pet_match_1.set('fieldAliases', {'Estado': 'Estado', 'Municipio': 'Municipio', 'Codigo_postal': 'Codigo_postal', });
lyr_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2.set('fieldAliases', {'state': 'state', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'locality': 'locality', 'zonificacion': 'zonificacion', });
lyr_cps_estados_pet_match_1.set('fieldImages', {'Estado': 'TextEdit', 'Municipio': 'TextEdit', 'Codigo_postal': '', });
lyr_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2.set('fieldImages', {'state': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'locality': 'TextEdit', 'zonificacion': 'TextEdit', });
lyr_cps_estados_pet_match_1.set('fieldLabels', {'Estado': 'header label', 'Municipio': 'header label', 'Codigo_postal': 'header label', });
lyr_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2.set('fieldLabels', {'state': 'header label', 'station_code': 'header label', 'zipcode': 'header label', 'region': 'header label', 'locality': 'header label', 'zonificacion': 'header label', });
lyr_poligonos_zipcodes_v23_1_copiapoligonos_zipcodes_v23_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});