import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Container, Row, Col, FormInput } from "shards-react";

// components
import PageTitle from "../../components/common/PageTitle";

// map
import "leaflet/dist/leaflet.css";
import { Map, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";

const iconRider = new L.Icon({
  iconUrl: require("../../assets/map/rider.svg"),
  iconRetinaUrl: require("../../assets/map/rider.svg"),
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 55)
  // className: 'leaflet-div-icon'
});

const iconHome = new L.Icon({
  iconUrl: require("../../assets/map/home.svg"),
  iconRetinaUrl: require("../../assets/map/home.svg"),
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 55)
  // className: 'leaflet-div-icon'
});

// L.geoJSON(geojsonFeature).addTo(map);

const DEFAULT_VIEWPORT = {
  center: [14.601081, 121.006025],
  zoom: 20
};

const MapSampleView = () => {
  const [homeLocation] = useState({
    homeLat: 14.600376,
    homeLng: 121.00674
  });
  const [riderLocation] = useState({
    riderLat: 14.601646,
    riderLng: 121.004573
  });

  const [viewport] = useState(DEFAULT_VIEWPORT);

  const { homeLat, homeLng } = homeLocation;
  const { riderLat, riderLng } = riderLocation;
  const riderPosition = [riderLat, riderLng];
  const homePosition = [homeLat, homeLng];
  const reversedRiderPosition = [riderLng, riderLat];
  const reversedHomePosition = [homeLng, homeLat];

  const geojsonfeature = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [reversedHomePosition, reversedRiderPosition]
        }
      }
    ]
  };

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Map"
          subtitle="overview"
          className="text-sm-left mb-3"
        />
      </Row>
      <Row className="mb-3">
        <Col md="6">
          <label htmlFor="homeAddress">Your Home Address</label>
          <FormInput
            id="homeAddress"
            type="text"
            placeholder="Address"
            value="2042 Jose Abad Santos Street, Sta. Mesa, Manila"
            onChange={() => {}}
          />
        </Col>
        <Col md="6">
          <label htmlFor="riderLocation">
            Rider's Current Location (temporary)
          </label>
          <FormInput
            id="riderLocation"
            type="text"
            placeholder="Rider's Current Location(temporary)"
            value="Jollibee Pureza, Sta. Mesa, Manila"
            onChange={() => {}}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Map center={homePosition} zoom={19} viewport={viewport}>
            <TileLayer
              url=" https://api.mapbox.com/styles/v1/nikkiamyam/ckcrm7sio0zlb1iqu8a11wgv6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibmlra2lhbXlhbSIsImEiOiJja2Nya3RwN3QwOXRvMnlwNDVjd2wxaGM5In0.NWtijh6EpmpuCY_iXY1tPw"
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            />
            <GeoJSON data={geojsonfeature} style={{ color: '#F8AD16'}} />
            <Marker position={riderPosition} icon={iconRider}>
              <Popup>Jose Panganiban, Camarines Norte</Popup>
            </Marker>

            <Marker position={homePosition} icon={iconHome}>
              <Popup>Pag-asa, Jose Panganiban, Camarines Norte</Popup>
            </Marker>
          </Map>
        </Col>
      </Row>
    </Container>
  );
};

MapSampleView.propTypes = {};

MapSampleView.defaultProps = {};

export default MapSampleView;
