import React, { Component, PropTypes }  from 'react';



class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                {this.props.children}
            </div>
        );
    }
}

App.prototype= {
    children: PropTypes.object.isRequired
};
export default App;