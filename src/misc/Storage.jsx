import React, {Component} from 'react'

class Storage extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        fetch('user')
    }

    render() {
        return(
            <div></div>
        );
    }
}

export default Storage;