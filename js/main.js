jQuery(document).ready(function($) {

	// create nav variable
	var nav = $('#nav');
	var content = $('#content');
	
    var geoURL = 'https://api.ipgeolocation.io/ipgeo?apiKey=f2e4fb339e5e4b4b89909b61a2ba7609';
	
	$.ajax({
	  url: geoURL,
	  method: "GET"
	}).then(function(response) {
		var geolocation = response.city;
		console.log(geolocation);
		populateWeather(geolocation);	
	});
	
	// country code to full name data
	var isoCountries = {
		'AF' : 'Afghanistan',
		'AX' : 'Aland Islands',
		'AL' : 'Albania',
		'DZ' : 'Algeria',
		'AS' : 'American Samoa',
		'AD' : 'Andorra',
		'AO' : 'Angola',
		'AI' : 'Anguilla',
		'AQ' : 'Antarctica',
		'AG' : 'Antigua And Barbuda',
		'AR' : 'Argentina',
		'AM' : 'Armenia',
		'AW' : 'Aruba',
		'AU' : 'Australia',
		'AT' : 'Austria',
		'AZ' : 'Azerbaijan',
		'BS' : 'Bahamas',
		'BH' : 'Bahrain',
		'BD' : 'Bangladesh',
		'BB' : 'Barbados',
		'BY' : 'Belarus',
		'BE' : 'Belgium',
		'BZ' : 'Belize',
		'BJ' : 'Benin',
		'BM' : 'Bermuda',
		'BT' : 'Bhutan',
		'BO' : 'Bolivia',
		'BA' : 'Bosnia And Herzegovina',
		'BW' : 'Botswana',
		'BV' : 'Bouvet Island',
		'BR' : 'Brazil',
		'IO' : 'British Indian Ocean Territory',
		'BN' : 'Brunei Darussalam',
		'BG' : 'Bulgaria',
		'BF' : 'Burkina Faso',
		'BI' : 'Burundi',
		'KH' : 'Cambodia',
		'CM' : 'Cameroon',
		'CA' : 'Canada',
		'CV' : 'Cape Verde',
		'KY' : 'Cayman Islands',
		'CF' : 'Central African Republic',
		'TD' : 'Chad',
		'CL' : 'Chile',
		'CN' : 'China',
		'CX' : 'Christmas Island',
		'CC' : 'Cocos (Keeling) Islands',
		'CO' : 'Colombia',
		'KM' : 'Comoros',
		'CG' : 'Congo',
		'CD' : 'Congo, Democratic Republic',
		'CK' : 'Cook Islands',
		'CR' : 'Costa Rica',
		'CI' : 'Cote D\'Ivoire',
		'HR' : 'Croatia',
		'CU' : 'Cuba',
		'CY' : 'Cyprus',
		'CZ' : 'Czech Republic',
		'DK' : 'Denmark',
		'DJ' : 'Djibouti',
		'DM' : 'Dominica',
		'DO' : 'Dominican Republic',
		'EC' : 'Ecuador',
		'EG' : 'Egypt',
		'SV' : 'El Salvador',
		'GQ' : 'Equatorial Guinea',
		'ER' : 'Eritrea',
		'EE' : 'Estonia',
		'ET' : 'Ethiopia',
		'FK' : 'Falkland Islands (Malvinas)',
		'FO' : 'Faroe Islands',
		'FJ' : 'Fiji',
		'FI' : 'Finland',
		'FR' : 'France',
		'GF' : 'French Guiana',
		'PF' : 'French Polynesia',
		'TF' : 'French Southern Territories',
		'GA' : 'Gabon',
		'GM' : 'Gambia',
		'GE' : 'Georgia',
		'DE' : 'Germany',
		'GH' : 'Ghana',
		'GI' : 'Gibraltar',
		'GR' : 'Greece',
		'GL' : 'Greenland',
		'GD' : 'Grenada',
		'GP' : 'Guadeloupe',
		'GU' : 'Guam',
		'GT' : 'Guatemala',
		'GG' : 'Guernsey',
		'GN' : 'Guinea',
		'GW' : 'Guinea-Bissau',
		'GY' : 'Guyana',
		'HT' : 'Haiti',
		'HM' : 'Heard Island & Mcdonald Islands',
		'VA' : 'Holy See (Vatican City State)',
		'HN' : 'Honduras',
		'HK' : 'Hong Kong',
		'HU' : 'Hungary',
		'IS' : 'Iceland',
		'IN' : 'India',
		'ID' : 'Indonesia',
		'IR' : 'Iran, Islamic Republic Of',
		'IQ' : 'Iraq',
		'IE' : 'Ireland',
		'IM' : 'Isle Of Man',
		'IL' : 'Israel',
		'IT' : 'Italy',
		'JM' : 'Jamaica',
		'JP' : 'Japan',
		'JE' : 'Jersey',
		'JO' : 'Jordan',
		'KZ' : 'Kazakhstan',
		'KE' : 'Kenya',
		'KI' : 'Kiribati',
		'KR' : 'Korea',
		'KW' : 'Kuwait',
		'KG' : 'Kyrgyzstan',
		'LA' : 'Lao People\'s Democratic Republic',
		'LV' : 'Latvia',
		'LB' : 'Lebanon',
		'LS' : 'Lesotho',
		'LR' : 'Liberia',
		'LY' : 'Libyan Arab Jamahiriya',
		'LI' : 'Liechtenstein',
		'LT' : 'Lithuania',
		'LU' : 'Luxembourg',
		'MO' : 'Macao',
		'MK' : 'Macedonia',
		'MG' : 'Madagascar',
		'MW' : 'Malawi',
		'MY' : 'Malaysia',
		'MV' : 'Maldives',
		'ML' : 'Mali',
		'MT' : 'Malta',
		'MH' : 'Marshall Islands',
		'MQ' : 'Martinique',
		'MR' : 'Mauritania',
		'MU' : 'Mauritius',
		'YT' : 'Mayotte',
		'MX' : 'Mexico',
		'FM' : 'Micronesia, Federated States Of',
		'MD' : 'Moldova',
		'MC' : 'Monaco',
		'MN' : 'Mongolia',
		'ME' : 'Montenegro',
		'MS' : 'Montserrat',
		'MA' : 'Morocco',
		'MZ' : 'Mozambique',
		'MM' : 'Myanmar',
		'NA' : 'Namibia',
		'NR' : 'Nauru',
		'NP' : 'Nepal',
		'NL' : 'Netherlands',
		'AN' : 'Netherlands Antilles',
		'NC' : 'New Caledonia',
		'NZ' : 'New Zealand',
		'NI' : 'Nicaragua',
		'NE' : 'Niger',
		'NG' : 'Nigeria',
		'NU' : 'Niue',
		'NF' : 'Norfolk Island',
		'MP' : 'Northern Mariana Islands',
		'NO' : 'Norway',
		'OM' : 'Oman',
		'PK' : 'Pakistan',
		'PW' : 'Palau',
		'PS' : 'Palestinian Territory, Occupied',
		'PA' : 'Panama',
		'PG' : 'Papua New Guinea',
		'PY' : 'Paraguay',
		'PE' : 'Peru',
		'PH' : 'Philippines',
		'PN' : 'Pitcairn',
		'PL' : 'Poland',
		'PT' : 'Portugal',
		'PR' : 'Puerto Rico',
		'QA' : 'Qatar',
		'RE' : 'Reunion',
		'RO' : 'Romania',
		'RU' : 'Russian Federation',
		'RW' : 'Rwanda',
		'BL' : 'Saint Barthelemy',
		'SH' : 'Saint Helena',
		'KN' : 'Saint Kitts And Nevis',
		'LC' : 'Saint Lucia',
		'MF' : 'Saint Martin',
		'PM' : 'Saint Pierre And Miquelon',
		'VC' : 'Saint Vincent And Grenadines',
		'WS' : 'Samoa',
		'SM' : 'San Marino',
		'ST' : 'Sao Tome And Principe',
		'SA' : 'Saudi Arabia',
		'SN' : 'Senegal',
		'RS' : 'Serbia',
		'SC' : 'Seychelles',
		'SL' : 'Sierra Leone',
		'SG' : 'Singapore',
		'SK' : 'Slovakia',
		'SI' : 'Slovenia',
		'SB' : 'Solomon Islands',
		'SO' : 'Somalia',
		'ZA' : 'South Africa',
		'GS' : 'South Georgia And Sandwich Isl.',
		'ES' : 'Spain',
		'LK' : 'Sri Lanka',
		'SD' : 'Sudan',
		'SR' : 'Suriname',
		'SJ' : 'Svalbard And Jan Mayen',
		'SZ' : 'Swaziland',
		'SE' : 'Sweden',
		'CH' : 'Switzerland',
		'SY' : 'Syrian Arab Republic',
		'TW' : 'Taiwan',
		'TJ' : 'Tajikistan',
		'TZ' : 'Tanzania',
		'TH' : 'Thailand',
		'TL' : 'Timor-Leste',
		'TG' : 'Togo',
		'TK' : 'Tokelau',
		'TO' : 'Tonga',
		'TT' : 'Trinidad And Tobago',
		'TN' : 'Tunisia',
		'TR' : 'Turkey',
		'TM' : 'Turkmenistan',
		'TC' : 'Turks And Caicos Islands',
		'TV' : 'Tuvalu',
		'UG' : 'Uganda',
		'UA' : 'Ukraine',
		'AE' : 'United Arab Emirates',
		'GB' : 'United Kingdom',
		'US' : 'United States',
		'UM' : 'United States Outlying Islands',
		'UY' : 'Uruguay',
		'UZ' : 'Uzbekistan',
		'VU' : 'Vanuatu',
		'VE' : 'Venezuela',
		'VN' : 'Viet Nam',
		'VG' : 'Virgin Islands, British',
		'VI' : 'Virgin Islands, U.S.',
		'WF' : 'Wallis And Futuna',
		'EH' : 'Western Sahara',
		'YE' : 'Yemen',
		'ZM' : 'Zambia',
		'ZW' : 'Zimbabwe'
	};
	
	// week day number to week day name
	var weekDays = {
		0: 'Sunday',
		1: 'Monday',
		2: 'Tuesday',
		3: 'Wednesday',
		4: 'Thursday',
		5: 'Friday',
		6: 'Saturday'
	};
	
	// assign imagery to weather types
	var weatherImagery = {
		Clear: {
			icon: 'img/sunny.svg',
			image: 'img/clear-sky.png'
		},
		Clouds: {
			icon: 'img/partial.svg',
			image: 'img/scattered-clouds.png'
		},
		Squall: {
			icon: 'img/broken.svg',
			image: 'img/broken-clouds.png'
		},
		Drizzle: {
			icon: 'img/rainy.svg',
			image: 'img/shower-rain.png'
		},
		Rain: {
			icon: 'img/rainy.svg',
			image: 'img/rain.png'
		},
		Thunderstorm: {
			icon: 'img/thunder.svg',
			image: 'img/thunderstorm.png'
		},
		Tornado: {
			icon: 'img/thunder.svg',
			image: 'img/thunderstorm.png'
		},
		Snow: {
			icon: 'img/snowy.svg',
			image: 'img/snow.png'
		},
		Mist: {
			icon: 'img/cloudy.svg',
			image: 'img/mist.png'
		},
		Fog: {
			icon: 'img/cloudy.svg',
			image: 'img/mist.png'
		},
		Smoke: {
			icon: 'img/cloudy.svg',
			image: 'img/mist.png'
		},
		Haze: {
			icon: 'img/cloudy.svg',
			image: 'img/mist.png'
		},
		Dust: {
			icon: 'img/broken.svg',
			image: 'img/mist.png'
		},
		Sand: {
			icon: 'img/broken.svg',
			image: 'img/mist.png'
		},
		Ash: {
			icon: 'img/broken.svg',
			image: 'img/mist.png'
		}
	};
	
	// page load animations
	var toggle = $('#toggle').attr('style', 'opacity: 0.4');
	
	// pull open/closed status from storage and add class to nav
	var navStatus = localStorage.getItem('Navigation');
	if (navStatus !== '') {
		nav.addClass(navStatus);
	}
	
	// if nav doesn't have either open/closed class, add open class
	if (nav.hasClass('open') === false && nav.hasClass('closed') === false) {
		nav.addClass('open');
	}
	
	// on toggle menu click...
	$('#toggle').on('click', function(event) {
		event.preventDefault();
		
		// if menu is open...
		if (nav.hasClass('open')) {
			
			// close menu
			nav.removeClass('open');
			nav.addClass('closed');
			nav.attr('style', 'padding: 24px 13px');
			
			// send status to storage
			localStorage.setItem('Navigation', 'closed');
		
		// if menu is closed...
		} else {
			
			// open menu
			nav.removeClass('closed');
			nav.addClass('open');
			nav.attr('style', 'padding: 24px 15px');
			
			// send status to storage
			localStorage.setItem('Navigation', 'open');
			
		}
		
	});
	
	// create empty list array
	var listArray = [];
	
	// create search list <section> and <ul>
	var searchList = $('<section>').attr('id', 'search-list').addClass('row');
	var ul = $('<ul>').addClass('col-12');
	
	// if storage has list items, push items to list array and prepend to search list
	var storage = localStorage.getItem('List Items');
	if (storage !== null) {
		listArray = storage.split(',');
		listArray.forEach(function(i) {	
			var storageItem = $('<li>').text(i);
			ul.prepend(storageItem);	
		});
	}
	
	// append search list <section> and <ul>
	searchList.append(ul);
	nav.append(searchList);
	
	// on search form submit...
	$('#nav li').on('click', function() {
		
		// empty div each time so only 1 populates
		content.html('');
		$('#nav li').removeClass('active')
		
		// grab the search value, then empty the field
		var location = $(this).addClass('active').text();
		populateWeather(location);
	
	});
	
	// on search form submit...
	$('#nav form').on('submit', function(event) {
		event.preventDefault();
		
		// empty div each time so only 1 populates
		content.html('');
		
		// grab the search value, then empty the field
		var search = $('#search').val();
		populateWeather(search);
		$('#search').val('');
		
		// if search has a value, prepend item to list
		if (search !== '') {
			var li = $('<li>').text(search);
			ul.prepend(li);
			
			// push new item to list array and send array to local storage
			listArray.push(li.text());
			localStorage.setItem('List Items', listArray);
		}
	
	});
	
	function populateWeather(value) {
		
		// get API key, search input value, and query URL
		var APIKey = 'a490091f7e6e08ff474d1e72a25fd630';
		var weatherFor = value;
		var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + weatherFor + '&appid=' + APIKey;
		
		$.ajax({
		  url: queryURL,
		  method: "GET"
		}).then(function(response) {
		
			// convert temp to fahrenheit  
			var k = response.main.temp;
			var temp = (k - 273.15) * 1.80 + 32;
			temp = temp.toFixed(0);
			
			// convert 'feels like' temp to fahrenheit  
			k = response.main.feels_like;
			var feelsLike = (k - 273.15) * 1.80 + 32;
			feelsLike = feelsLike.toFixed(0);
			
			// get weather icon description, location name, humidity %, and wind speed
			var weather = response.weather[0].main;
			var bgImage = weatherImagery[weather].image;
			var icon = weatherImagery[weather].icon;
			var name = response.name;
			var humidity = response.main.humidity;
			var wind = response.wind.speed.toFixed(1);
			
			// get wind %
			var windMath = (wind * 100)/55;
			
			// get current day info
			var today = moment();
			var dayNum = moment().day();
			var day = weekDays[dayNum];
			var time = moment().format('h:mm a');
		
			// convert country code to full name
			function getCountryName (countryCode) {
			    if (isoCountries.hasOwnProperty(countryCode)) {
			        return isoCountries[countryCode];
			    } else {
			        return countryCode;
			    }
			}
			var country = getCountryName(response.sys.country);
			
			
		    // create and dynamically populate all weather jumbotron elements
		    var weatherJumbotron = $('<article>').addClass('jumbotron').attr('id', 'weather');
		    weatherJumbotron.attr('style', 'background: url(' + bgImage + ')');
		    var jumbotronRow = $('<div>').addClass('row');
		    
		    var dateOutput = $('<div>').addClass('col-12').attr('id', 'date');
		    dateOutput.html('<span id="day">' + day + '</span> • <span id="time">' + time + '</span>');
		    
		    var forecastOutput = $('<div>').addClass('col-lg-6').attr('id', 'forecast');
		    forecastOutput.html('<img id="icon" src="' + icon + '" alt="' + weather + '"><div id="temperature"><span>' + temp + '</span>°F</div><div id="location">' + name + '</div><div id="country">' + country + '</div>');
				
			var info = $('<div>').addClass('col-lg-6 d-flex align-items-end').attr('id', 'info');
			var details = $('<div>').addClass('w-100').attr('id', 'details');
			
			var humidityOutput = $('<div>').addClass('row').attr('id', 'humidity');
			humidityOutput.html('<label class="col">Humidity</label><label class="col-5 text-right"><span>' + humidity + '</span>%</label><div class="bar col-12"><div class="status-bar"></div></div>');
			
			var uvOutput = $('<div>').addClass('row').attr('id', 'uv-index');
			uvOutput.html('<label class="col">UV Index</label><label class="col-5 text-right"><span></span></label><div class="bar col-12"><div class="status-bar"></div></div>');
			
			var windOutput = $('<div>').addClass('row').attr('id', 'wind-speed');
			windOutput.html('<label class="col">Wind Speed</label><label class="col-5 text-right"><span>' + wind + '</span> MPH</label><div class="bar col-12"><div class="status-bar"></div></div>');
			
			var feelsLikeOutput = $('<div>').addClass('col-lg-6').attr('id', 'feels-like');
			feelsLikeOutput.html('Feels Like: <span>' + feelsLike + '°</span>');
			
			// append all weather jumbotron elements
		    details.append(humidityOutput, uvOutput, windOutput);
		    info.append(details);
		    jumbotronRow.append(dateOutput, forecastOutput, info, feelsLikeOutput);
		    weatherJumbotron.append(jumbotronRow);
		    content.append(weatherJumbotron);
		    
		    // create initial five day forecast elements
		    var fiveDayContainer = $('<article>').attr('id', 'five-day');
		    var fiveDayRow = $('<div>').addClass('row d-block text-center');
		    
		    // append initial five day forecast elements
		    fiveDayContainer.append(fiveDayRow);
		    content.append(fiveDayContainer);
		      
			// get latitude/longitude of search location      
			var lat = response.coord.lat;
			var lon = response.coord.lon;
			
			// get query URL for UV Index data
			var uvURL = 'https://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=' + APIKey;
			
			$.ajax({
			  url: uvURL,
			  method: "GET"
			}).then(function(UV) {
				
				// get uv index value and %
				var uv = UV.value;
				var uvMath = (uv * 100)/11;
				
				// add uv index to span
				$('#uv-index span').text(UV.value);
				
				// animate status bar elements
				$('#humidity .status-bar').attr('style', 'left: ' + humidity + '%');
				$('#uv-index .status-bar').attr('style', 'left: ' + uvMath + '%');
				$('#wind-speed .status-bar').attr('style', 'left: ' + windMath + '%');
		   
			});
			
			// get API key, search input value, and full query URL
			var oneCallURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&cnt=5' + '&appid=' + APIKey;
		
			$.ajax({
			  url: oneCallURL,
			  method: "GET"
			}).then(function(oneCall) {	
				
				// shorten API path and create array of next 5 days
				var daily = oneCall.daily;
				var fiveDays = [daily[1], daily[2], daily[3], daily[4], daily[5]];
				
				// for each array element...
				fiveDays.forEach(function(i) {
					
					// convert high to fahrenheit  
					k = i.temp.max;
					var high = (k - 273.15) * 1.80 + 32;
					high = high.toFixed(0);
					
					// convert low to fahrenheit  
					k = i.temp.min;
					var low = (k - 273.15) * 1.80 + 32;
					low = low.toFixed(0);
					
					// get date and convert to day and time
					var dt = i.dt;
					var date = new Date(dt * 1000);
					var weekDayNum = date.getDay();
					var weekDay = weekDays[weekDayNum];
					
					// get weather icon description and icon
					var weather = i.weather[0].main;
					var icon = weatherImagery[weather].icon;
					
					// create elements for each five day forecast day
					var dayContainer = $('<div>').addClass('col text-center');
					dayContainer.html('<div class="five-date">' + weekDay + '</div><img class="five-icon" src="' + icon + '" alt="' + weather + '"><div class="five-temp"><span class="high">' + high + '°</span> / <span class="low">' + low + '°</span></div>');
					
					// append elements for each five day forecast day
					fiveDayContainer.append(dayContainer);
					
				});
				
			});
		
		});
	
	};

});