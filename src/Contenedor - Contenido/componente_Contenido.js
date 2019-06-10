import React, {Component} from 'react';
import PropTypes from 'prop-types';
/*Toda la información que se va a presentar vendrá de sus propiedades,
por lo que el origen  de los datos le es completamente desconocido.*/ 
class ContentComponent extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div className="cv-ContentComponent">
            <img className="cv-ContentComponent-image" src={this.props.avatar}/>
            <ul className="cv-ContentComponent-list">
            <li className="cv-ContentComponent-nick">
            {`NickName: ${this.props.username}`}
            </li>
            </ul>
            </div>
        )
    }
}

ContentComponent.propTypes={
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}
export default ContentComponent;

