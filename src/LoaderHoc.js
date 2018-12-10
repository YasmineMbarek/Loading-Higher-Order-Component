import React, {Component} from 'react';
function LoaderHOC(WrappedComponent) {
  return class LoaderHOC extends Component{
  
    render(){
    
        return this.props.movies.length===0 ? <div><p className="pidesgin" > Movie not Found ... </p><div className="loader"></div></div> : <WrappedComponent {...this.props}/>;
    
      }
  }

}
export default LoaderHOC;