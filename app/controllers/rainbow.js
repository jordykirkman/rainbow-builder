import Ember from 'ember';

export default Ember.Controller.extend({

	// default rainbow colors
	color1: "#ffea00",
	color2: "#00d3ff",
	color3: "#f0bdff",

	sparkleColor: "#ffffff",

	// predefined sparkle style list
	styles: Ember.A(["shine", "bling", "dazzle"]),

	// default sparkle style
	sparkleStyle: "shine",

	// predefined style sets
	themes: Ember.A([
		{name: "Spring", sparkleStyle: "shine", color1: "#fce859", color2: "#32b727", color3: "#5fc2ff", sparkleColor: "#ffffff"},
		{name: "Worn Leather", sparkleStyle: "dazzle", color1: "#b7a434", color2: "#776612", color3: "#5b4428", sparkleColor: "#ada677"},
		{name: "Demon Rainbow", sparkleStyle: "bling", color1: "#444444", color2: "#38312b", color3: "#30130b", sparkleColor: "#af0000"},
	]),

	actions: {
		selectTheme: function(theme){
			this.setProperties({
				color1: theme.color1,
				color2: theme.color2,
				color3: theme.color3,
				sparkleStyle: theme.sparkleStyle,
				sparkleColor: theme.sparkleColor
			});
		}
	}

});
