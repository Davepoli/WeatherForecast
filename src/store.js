import React from "react";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appName: "Weather-app"
        }
    }

    render() {
        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { ...this.state })
        });
    }
}