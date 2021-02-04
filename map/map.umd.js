
require('../source/modules/smart.map');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.map = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;

	const Smart = window.Smart;
	/**
	 Our map component makes it easy for displaying map with defined location by user requireing a small piece of code.
	*/
	class Map extends React.Component {
	    constructor(props) {
	        super(props);
	        this.componentRef = React.createRef();
	    }
	    // Gets the id of the React component.
	    get id() {
	        if (!this._id) {
	            this._id = 'Map' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        }
	        return this._id;
	    }
	    /** Before you start using the maps component, you need a project with a billing account and the Maps JavaScript API enabled.To learn more, see https://developers.google.com/maps/gmp-get-started.The API key is a unique identifier that authenticates requests associated with your project for usage and billing purposes. You must have at least one API key associated with your project.
	    *	Property type: string
	    */
	    get apiKey() {
	        return this.nativeElement ? this.nativeElement.apiKey : undefined;
	    }
	    set apiKey(value) {
	        if (this.nativeElement) {
	            this.nativeElement.apiKey = value;
	        }
	    }
	    /** The query parameter defines the location the user wants to display on the map.The user can input different values for continents, country, city or address.
	    *	Property type: string
	    */
	    get query() {
	        return this.nativeElement ? this.nativeElement.query : undefined;
	    }
	    set query(value) {
	        if (this.nativeElement) {
	            this.nativeElement.query = value;
	        }
	    }
	    /** The mode property handles which mode for the map to be used.
	    *	Property type: string
	    */
	    get mode() {
	        return this.nativeElement ? this.nativeElement.mode : undefined;
	    }
	    set mode(value) {
	        if (this.nativeElement) {
	            this.nativeElement.mode = value;
	        }
	    }
	    /** The 'map-type' property gives the user a set of options to choose from  in order to display certain type of map such as: place,view, streetview.
	    *	Property type: string
	    */
	    get mapType() {
	        return this.nativeElement ? this.nativeElement.mapType : undefined;
	    }
	    set mapType(value) {
	        if (this.nativeElement) {
	            this.nativeElement.mapType = value;
	        }
	    }
	    /** This property is defined when used with 'stretview' map type and it defines the horizontal orientation of the streetview panorama.
	    *	Property type: number
	    */
	    get heading() {
	        return this.nativeElement ? this.nativeElement.heading : undefined;
	    }
	    set heading(value) {
	        if (this.nativeElement) {
	            this.nativeElement.heading = value;
	        }
	    }
	    /** The  'pitch' property set the value of the vertical orientation('up' and 'down') which by defaault from Google Maps is horizontal.
	    *	Property type: number
	    */
	    get pitch() {
	        return this.nativeElement ? this.nativeElement.pitch : undefined;
	    }
	    set pitch(value) {
	        if (this.nativeElement) {
	            this.nativeElement.pitch = value;
	        }
	    }
	    /** The zoom level of the camera determines the scale of the map. At larger zoom levels more detail can be seen on the screen, while at smaller zoom levels more of the world can be seen on the component.For example the following values show the approximate level of detail you can expect to see at eah zoom level( 1: World, 5: Landmas,10: City,15: Streets,20: Buildings )
	    *	Property type: number
	    */
	    get zoom() {
	        return this.nativeElement ? this.nativeElement.zoom : undefined;
	    }
	    set zoom(value) {
	        if (this.nativeElement) {
	            this.nativeElement.zoom = value;
	        }
	    }
	    // Gets the properties of the React component.
	    get properties() {
	        return ["apiKey", "query", "mode", "mapType", "heading", "pitch", "zoom"];
	    }
	    // Gets the events of the React component.
	    get eventListeners() {
	        return ["onCreate", "onReady"];
	    }
	    componentDidRender(initialize) {
	        const that = this;
	        const props = {};
	        const events = {};
	        let styles = null;
	        for (let prop in that.props) {
	            if (prop === 'children') {
	                continue;
	            }
	            if (prop === 'style') {
	                styles = that.props[prop];
	                continue;
	            }
	            if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
	                events[prop] = that.props[prop];
	                continue;
	            }
	            props[prop] = that.props[prop];
	        }
	        if (initialize) {
	            that.nativeElement = this.componentRef.current;
	        }
	        for (let prop in props) {
	            if (prop === 'class') {
	                const classNames = props[prop].trim().split(' ');
	                for (let className in classNames) {
	                    if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
	                        that.nativeElement.classList.add(classNames[className]);
	                    }
	                }
	                continue;
	            }
	            if (props[prop] !== that.nativeElement[prop]) {
	                const normalizeProp = (str) => {
	                    return str.replace(/-([a-z])/g, function (g) {
	                        return g[1].toUpperCase();
	                    });
	                };
	                if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
	                    that.nativeElement.setAttribute(prop, '');
	                }
	                const normalizedProp = normalizeProp(prop);
	                that.nativeElement[normalizedProp] = props[prop];
	            }
	        }
	        for (let eventName in events) {
	            that[eventName] = events[eventName];
	            that.nativeElement[eventName.toLowerCase()] = events[eventName];
	        }
	        if (initialize) {
	            if (that.onCreate) {
	                that.onCreate();
	            }
	            that.nativeElement.whenRendered(() => {
	                if (that.onReady) {
	                    that.onReady();
	                }
	            });
	        }
	        // setup styles.
	        if (styles) {
	            for (let styleName in styles) {
	                that.nativeElement.style[styleName] = styles[styleName];
	            }
	        }
	    }
	    componentDidMount() {
	        this.componentDidRender(true);
	    }
	    componentDidUpdate() {
	        this.componentDidRender(false);
	    }
	    componentWillUnmount() {
	        const that = this;
	        if (!that.nativeElement) {
	            return;
	        }
	        that.nativeElement.whenRenderedCallbacks = [];
	        for (let i = 0; i < that.eventListeners.length; i++) {
	            const eventName = that.eventListeners[i];
	            that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
	        }
	    }
	    render() {
	        return (React.createElement("smart-map", { ref: this.componentRef }, this.props.children));
	    }
	}

	exports.Smart = Smart;
	exports.Map = Map;
	exports.default = Map;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
