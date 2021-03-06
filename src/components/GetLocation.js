import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Image from './Images/sad-face.jpg';


const mapStyles = {
  width: '96%',
  height: '70%'
};


export class GetLocation extends Component {
    state = {
        showingInfoWindow: false, 
        activeMarker: {},          
        selectedPlace: {}          
      };
      onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
        <div>
            <a className="btn text-primary"  data-toggle="modal" data-target={"#modal" + this.props.nic}>
                <i className="fas fa-search-location"></i>
            </a>

            <div className="modal fade" id={"modal" + this.props.nic} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Location</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                {this.props.sub == 0 ? (<div className="modal-body text-center" style={{ height:'60vh'}}>
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={
                        {
                            lat: this.props.lat,
                            lng: this.props.long
                        }
                        }
                    >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Kenyatta International Convention Centre'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                    <div>
                        <h4>Place</h4>
                    </div>
                    </InfoWindow>
                    </Map>
                </div>) : (<div className="modal-body text-center" style={{ height:'60vh'}}>
                  <br></br> <br></br> <br></br>
                     <h3>Sorry !!! Can't track this patient as not subscribed to the Patient Tracking System </h3>

                     <img src={Image} height = "190" width="190" alt="sad-face.jpg"></img>
                     
                     


                  </div>)}
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAP2m0MRSe8R-sJs3Ogt6xChYf3MyIGaqw' 
})(GetLocation);
