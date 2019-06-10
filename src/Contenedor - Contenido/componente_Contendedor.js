import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContentComponent from './componente_Contenido';
/**
 Un contenedor realiza la obtención de datos y luego procesa su subcomponente correspondiente. 
 */
class GitUserContainer extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        fetch('https://api.github.com/search/users?q=CristianCuartas')
        .then(response => response.json())
        .then(results => results.items[0])
        .then(profile => this.setState({username: profile.login, avatar: profile.avatar_url}))
    }
    render(){
        return <ContentComponent {...this.state}/>
    }
}
export default GitUserContainer;
