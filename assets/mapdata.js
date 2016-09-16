var width = (screen.width * 0.31354).toString();
var simplemaps_usmap_mapdata = {

	main_settings:{
		//General settings
		width: width, //or 'responsive'
		background_color: '#FFFFFF',
		background_transparent: 'yes',
		border_color: '#aaa',
		popups: 'detect', //on_click, on_hover, or detect

		//State defaults
		state_description:   '',
		state_color: '#ddd',
		state_hover_color: '#ddd',
		state_url: 'http://simplemaps.com',
		border_size: 1.5,
		all_states_inactive: 'yes',
		all_states_zoomable: 'no',

		//Location defaults
		location_description:  'Location description',
		location_color: '#FF0067',
		location_opacity: .8,
		location_hover_opacity: 1,
		location_url: '',
		location_size: 25,
		location_type: 'square', // circle, square, image
		location_image_source: 'frog.png', //name of image in the map_images folder
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',

		//Labels
		label_color: '#d5ddec',
		label_hover_color: '#d5ddec',
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
		hide_eastern_labels: 'no',

		//Zoom settings
		zoom: 'yes', //use default regions
		back_image: 'no',   //Use image instead of arrow for back zoom
		arrow_color: '#3B729F',
		arrow_color_border: '#88A4BC',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds

		//Popup settings
		popup_color: 'white',
		popup_opacity: 0.00001,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css

		//Advanced settings
		div: 'map',
		auto_load: 'yes',
		url_new_tab: 'no',
		images_directory: 'default', //e.g. 'map_images/'
		fade_time:  .1, //time to fade out
		link_text: '(Link)'  //Text mobile browsers will see for links

	},

	state_specific:{
		"HI": {
			name: 'Hawaii',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"AK": {
			name: 'Alaska',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'javascript:console.log("click")'
			},
		"FL": {
			name: 'Florida',
			description: 'default',
			color: 'red',
			hover_color: 'red',
			url: 'javascript:window.detectDisplay(window.displayType, "florida")',
			inactive: 'no'
			},
		"NH": {
			name: 'New Hampshire',
			description: 'default',
			color: 'blue',
			hover_color: 'blue',
			url: 'javascript:window.detectDisplay(window.displayType, "new Hampshire")',
			inactive: 'no'
			},
		"VT": {
			name: 'Vermont',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"ME": {
			name: 'Maine',
			description: 'default',
			color: 'blue',
			hover_color: 'blue',
			url: 'javascript:window.detectDisplay(window.displayType, "maine")',
			inactive: 'no'
			},
		"RI": {
			name: 'Rhode Island',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"NY": {
			name: 'New York',
			description: 'default',
			color: 'blue',
			hover_color: 'blue',
			url: 'javascript:window.detectDisplay(window.displayType, "new york")',
			inactive: 'no'
		},
		"PA": {
			name: 'Pennsylvania',
			description: 'default',
			color: 'blue',
			hover_color: 'blue',
			url: 'javascript:window.detectDisplay(window.displayType, "pennsylvania")',
			inactive: 'no'
			},
		"NJ": {
			name: 'New Jersey',
			description: 'default',
			color: 'blue',
			hover_color: 'blue',
			url: 'javascript:window.detectDisplay(window.displayType, "new jersey")',
			inactive: 'no'
			},
		"DE": {
			name: 'Delaware',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"MD": {
			name: 'Maryland',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"VA": {
			name: 'Virginia',
			description: 'default',
			color: 'blue',
			hover_color: 'blue',
			url: 'javascript:window.detectDisplay(window.displayType, "virginia")',
			inactive: 'no'
			},
		"WV": {
			name: 'West Virginia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"OH": {
			name: 'Ohio',
			description: 'default',
			color: 'red',
			hover_color: 'red',
			url: 'javascript:window.detectDisplay(window.displayType, "ohio")',
			inactive: 'no'
			},
		"IN": {
			name: 'Indiana',
			description: 'default',
			color: 'red',
			hover_color: 'red',
			url: 'javascript:window.detectDisplay(window.displayType, "indiana")',
			inactive: 'no'
			},
		"IL": {
			name: 'Illinois',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"CT": {
			name: 'Connecticut',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"WI": {
			name: 'Wisconsin',
			description: 'default',
			color: 'blue',
			hover_color: 'blue',
			url: 'javascript:window.detectDisplay(window.displayType, "wisconsin")',
			inactive: 'no'
			},
		"NC": {
			name: 'North Carolina',
			description: 'default',
			color: 'red',
			hover_color: 'red',
			url: 'javascript:window.detectDisplay(window.displayType, "north carolina")',
			inactive: 'no'
			},
		"DC": {
			name: 'District of Columbia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},
		"MA": {
			name: 'Massachusetts',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"TN": {
			name: 'Tennessee',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"AR": {
			name: 'Arkansas',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"MO": {
			name: 'Missouri',
			description: 'default',
			color: 'red',
			hover_color: 'red',
			url: 'javascript:window.detectDisplay(window.displayType, "missouri")',
			inactive: 'no'
			},
		"GA": {
			name: 'Georgia',
			description: 'default',
			color: 'red',
			hover_color: 'red',
			url: 'javascript:window.detectDisplay(window.displayType, "georgia")',
			inactive: 'no'
			},
		"SC": {
			name: 'South Carolina',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"KY": {
			name: 'Kentucky',
			description: 'default',
			color: 'default',
			zoomable: 'no',
			hover_color: 'default',
			url: 'default'
			},
		"AL": {
			name: 'Alabama',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"LA": {
			name: 'Louisiana',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'javascript:window.detectDisplay(window.displayType, "louisiana")',
			inactive: 'yes'
			},
		"MS": {
			name: 'Mississippi',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"IA": {
			name: 'Iowa',
			description: 'default',
			color: 'red',
			hover_color: 'red',
			url: 'javascript:window.detectDisplay(window.displayType, "iowa")',
			inactive: 'no'
			},
		"MN": {
			name: 'Minnesota',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'javascript:window.detectDisplay(window.displayType, "minnesota")',
			inactive: 'yes'
			},
		"OK": {
			name: 'Oklahoma',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"TX": {
			name: 'Texas',
			description: 'default',
			color: 'red',
			hover_color: 'red',
			url: 'javascript:window.detectDisplay(window.displayType, "texas")',
			inactive: 'no'
			},
		"NM": {
			name: 'New Mexico',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"KS": {
			name: 'Kansas',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"NE": {
			name: 'Nebraska',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"SD": {
			name: 'South Dakota',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"ND": {
			name: 'North Dakota',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"WY": {
			name: 'Wyoming',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"MT": {
			name: 'Montana',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"CO": {
			name: 'Colorado',
			description: 'default',
			color: 'blue',
			hover_color: 'blue',
			url: 'javascript:window.detectDisplay(window.displayType, "colorado")',
			inactive: 'no'
			},
		"UT": {
			name: 'Utah',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"AZ": {
			name: 'Arizona',
			description: 'default',
			color: 'red',
			hover_color: 'red',
			url: 'javascript:window.detectDisplay(window.displayType, "arizona")',
			inactive: 'no'
			},
		"NV": {
			name: 'Nevada',
			description: 'default',
			color: 'red',
			hover_color: 'red',
			url: 'javascript:window.detectDisplay(window.displayType, "nevada")',
			inactive: 'no'
			},
		"OR": {
			name: 'Oregon',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"WA": {
			name: 'Washington',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		"CA": {
			name: 'California',
			description: 'default',
			color: 'blue',
			hover_color: 'blue',
			url: 'javascript:window.detectDisplay(window.displayType, "california")',
			inactive: 'no'
			},
		"MI": {
			name: 'Michigan',
			description: 'default',
			color: 'blue',
			hover_color: 'blue',
			url: 'javascript:window.detectDisplay(window.displayType, "michigan")',
			inactive: 'no'
			},
		"ID": {
			name: 'Idaho',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
			},
		// Territories - Hidden unless hide is set to "no"
		"GU": {
			name: 'Guam',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
			},
		"VI": {
			name: 'Virgin Islands',
			image_source: 'x.png',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
			},
		"PR": {
			name: 'Puerto Rico',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
			},
    "AS": {
      name: 'American Samoa',
      description: 'default',
      color: 'default',
      hover_color: 'default',
      url: 'default',
      hide: 'yes'
    },
		"MP": {
			name: 'Northern Mariana Islands',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default',
			hide: 'yes'
			}
		},

	locations:{

	},

	labels:{

	}

}
