import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Chart from "./chart";

class Drone extends Component{
    constructor(props){
      super(props);
      props.onRequestDrone();
      setInterval(props.onRequestDrone, 4000);
    }
      render() {
        return (this.props.droneData.length===0?(<div>loading</div>):
          (<Chart {...this.props}/>)
          );
      }
}
const mapStateToProps = state => {
  const { droneData } = state.drone;
  return {
    droneData
  };
  };
  
  const mapDispatchToProps = dispath => {
    return {
        onRequestDrone: () => dispath({type: actions.UPDATE_DRONE})
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Drone);