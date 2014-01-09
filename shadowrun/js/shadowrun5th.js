angular.module('Shadowrun5thSheet', []);

function Shadowrun5thSheetController($scope)
{
	$scope.character = {
		'metatype'        : 'human',
		'gender'          : 'female',
		'age'             : 0,
		'age_unit'        : 'years',
		'height'          : 0,
		'height_unit'     : 'meters',
		'weight'          : 0,
		'weight_unit'     : 'kilogramms',
		'street_cred'     : 0,
		'notoriety'       : 0,
		'karma'           : 0,
		'total_karma'     : 0,
	};

	$scope.settings = {
		language: 'en-US'
	};

	$scope.repository = {
		'units': {
			'timespan': [
				{'id': 'seconds', 'factor': 1},
				{'id': 'minutes', 'factor': 60},
				{'id': 'hours',   'factor': 3600},
				{'id': 'days',    'factor': 86400},
				{'id': 'months',  'factor': 2629800},
				{'id': 'years',   'factor': 31557600}
			],
			'length': [
				{'id': 'milimeters',  'factor': 1},
				{'id': 'centimeters', 'factor': 10},
				{'id': 'inches',      'factor': 25.4},
				{'id': 'feet',        'factor': 304.8},
				{'id': 'yards',       'factor': 914.4},
				{'id': 'meters',      'factor': 1000},
				{'id': 'kilometers',  'factor': 1000000},
				{'id': 'miles',       'factor': 1609344}
			],
			'weight': [
				{'id': 'miligramms', 'factor' : 1},
				{'id': 'gramms',     'factor' : 1000},
				{'id': 'ounces',     'factor' : 28349.5},
				{'id': 'pounds',     'factor' : 453592},
				{'id': 'kilogramms', 'factor' : 1000000},
				{'id': 'tons',       'factor' : 1000000000}
			]
		},
		'languages': {
			'en-US': {
				'_label'                       : 'English (US)',
				'_unit_timespan_seconds'       : 'Seconds',
				'_unit_timespan_seconds_abbr'  : 'sec',
				'_unit_timespan_minutes'       : 'Minutes',
				'_unit_timespan_minutes_abbr'  : 'min',
				'_unit_timespan_hours'         : 'Hours',
				'_unit_timespan_hours_abbr'    : 'hr',
				'_unit_timespan_days'          : 'Days',
				'_unit_timespan_days_abbr'     : 'd',
				'_unit_timespan_months'        : 'Months',
				'_unit_timespan_months_abbr'   : 'm',
				'_unit_timespan_years'         : 'Years',
				'_unit_timespan_years_abbr'    : 'y',
				'_unit_length_milimeters'      : 'Milimeters',
				'_unit_length_milimeters_abbr' : 'mm',
				'_unit_length_centimeters'     : 'Centimeters',
				'_unit_length_centimeters_abbr': 'cm',
				'_unit_length_inches'          : 'Inches',
				'_unit_length_inches_abbr'     : 'in',
				'_unit_length_feet'            : 'Feet',
				'_unit_length_feet_abbr'       : 'ft',
				'_unit_length_yards'           : 'Yards',
				'_unit_length_yards_abbr'      : 'y',
				'_unit_length_meters'          : 'Meters',
				'_unit_length_meters_abbr'     : 'm',
				'_unit_length_kilometers'      : 'Kilometers',
				'_unit_length_kilometers_abbr' : 'km',
				'_unit_length_miles'           : 'Miles',
				'_unit_length_miles_abbr'      : 'ml',
				'_unit_weight_miligramms'      : 'Miligramms',
				'_unit_weight_miligramms_abbr' : 'mg',
				'_unit_weight_gramms'          : 'Gramms',
				'_unit_weight_gramms_abbr'     : 'g',
				'_unit_weight_ounces'          : 'Ounces',
				'_unit_weight_ounces_abbr'     : 'oc',
				'_unit_weight_pounds'          : 'Pounds',
				'_unit_weight_pounds_abbr'     : 'lbs',
				'_unit_weight_kilogramms'      : 'Kilogramms',
				'_unit_weight_kilogramms_abbr' : 'kg',
				'_unit_weight_tons'            : 'Tons',
				'_unit_weight_tons_abbr'       : 't',
				'Personal Data'                : 'Personal Data',
				'Character'                    : 'Character',
				'Player'                       : 'Player',
				'Notes'                        : 'Notes',
				'Name'                         : 'Name',
				'Primary Alias'                : 'Primary Alias',
				'Metatype'                     : 'Metatype',
				'Ethnicity'                    : 'Ethnicity',
				'Age'                          : 'Age',
				'Gender'                       : 'Gender',
				'Height'                       : 'Height',
				'Weight'                       : 'Weight',
				'Streed Cred'                  : 'Streed Cred',
				'Notoriety'                    : 'Notoriety',
				'Public Awareness'             : 'Public Awareness',
				'Karma'                        : 'Karma',
				'Total Karma'                  : 'Total Karma',
				'Misc'                         : 'Misc',
				'Male'                         : 'Male',
				'Female'                       : 'Female',
				'Human'                        : 'Human',
				'Elf'                          : 'Elf',
				'Dwarf'                        : 'Dwarf',
				'Orc'                          : 'Orc',
				'Troll'                        : 'Troll'
			},
			'de-DE': {
				'_label'                       : 'Deutsch',
				'_unit_timespan_seconds'       : 'Sekunden',
				'_unit_timespan_seconds_abbr'  : 'Sek',
				'_unit_timespan_minutes'       : 'Minuten',
				'_unit_timespan_minutes_abbr'  : 'Min',
				'_unit_timespan_hours'         : 'Stunden',
				'_unit_timespan_hours_abbr'    : 'Std',
				'_unit_timespan_days'          : 'Tage',
				'_unit_timespan_days_abbr'     : 'T',
				'_unit_timespan_months'        : 'Monate',
				'_unit_timespan_months_abbr'   : 'M',
				'_unit_timespan_years'         : 'Jahre',
				'_unit_timespan_years_abbr'    : 'J',
				'_unit_length_milimeters'      : 'Milimeter',
				'_unit_length_milimeters_abbr' : 'mm',
				'_unit_length_centimeters'     : 'Zentimeter',
				'_unit_length_centimeters_abbr': 'cm',
				'_unit_length_inches'          : 'Zoll',
				'_unit_length_inches_abbr'     : 'in',
				'_unit_length_feet'            : 'Fuß',
				'_unit_length_feet_abbr'       : 'ft',
				'_unit_length_yards'           : 'Yards',
				'_unit_length_yards_abbr'      : 'yd',
				'_unit_length_meters'          : 'Meter',
				'_unit_length_meters_abbr'     : 'm',
				'_unit_length_kilometers'      : 'Kilometer',
				'_unit_length_kilometers_abbr' : 'km',
				'_unit_length_miles'           : 'Meilen',
				'_unit_length_miles_abbr'      : 'ml',
				'_unit_weight_miligramms'      : 'Miligramm',
				'_unit_weight_miligramms_abbr' : 'mg',
				'_unit_weight_gramms'          : 'Gramm',
				'_unit_weight_gramms_abbr'     : 'g',
				'_unit_weight_ounces'          : 'Unzen',
				'_unit_weight_ounces_abbr'     : 'oc',
				'_unit_weight_pounds'          : 'Pfund',
				'_unit_weight_pounds_abbr'     : 'lbs',
				'_unit_weight_kilogramms'      : 'Kilogramm',
				'_unit_weight_kilogramms_abbr' : 'kg',
				'_unit_weight_tons'            : 'Tonnen',
				'_unit_weight_tons_abbr'       : 't',
				'Personal Data'                : 'Persönliche Daten',
				'Character'                    : 'Charakter',
				'Player'                       : 'Spieler',
				'Notes'                        : 'Notizen',
				'Name'                         : 'Name',
				'Primary Alias'                : 'Straßenname',
				'Metatype'                     : 'Metatyp',
				'Ethnicity'                    : 'Ethnie',
				'Age'                          : 'Alter',
				'Gender'                       : 'Geschlecht',
				'Height'                       : 'Größe',
				'Weight'                       : 'Gewicht',
				'Streed Cred'                  : 'Straßenruf',
				'Notoriety'                    : 'Schlechter Ruf',
				'Public Awareness'             : 'Bekanntheit',
				'Karma'                        : 'Karma',
				'Total Karma'                  : 'Gesamtes Karma',
				'Misc'                         : 'Verschiedenes',
				'Male'                         : 'Männlich',
				'Female'                       : 'Weiblich',
				'Human'                        : 'Mensch',
				'Elf'                          : 'Elf',
				'Dwarf'                        : 'Zwerg',
				'Orc'                          : 'Ork',
				'Troll'                        : 'Troll'
			}
		},
		'metatypes': {
			'human': {
				'label'     : 'Human',
				'attributes': 'narf'
			},
			'elf'  : {
				'label'     : 'Elf',
				'attributes': 'narf'
			},
			'dwarf': {
				'label'     : 'Dwarf',
				'attributes': 'narf'
			},
			'orc'  : {
				'label'     : 'Orc',
				'attributes': 'narf'
			},
			'troll': {
				'label'     : 'Troll',
				'attributes': 'narf'
			}
		},
		'genders': {
			'male'  : 'Male',
			'female': 'Female'
		}
	};

	$scope.i18n = {
		t: function(key, forcelang) {
			var uselang = $scope.settings.language;
			if (typeof forcelang !== 'undefined')
			{
				uselang = forcelang;
			}
			if (typeof $scope.repository.languages[uselang] !== 'undefined') {
				if (typeof $scope.repository.languages[uselang][key] !== 'undefined') {
					return $scope.repository.languages[uselang][key];
				}
				return '[***['+uselang+' / '+key+']***]';
			}
			return '[***['+uselang+']***]';
		},
		getUnitHeight: function() {
			return 'x';
		}
	}

	$scope.$watch('character.age_unit', function(newValue, oldValue) {
		$scope.character.age = ($scope.character.age * $scope.repository.units.timespan[oldValue]) / $scope.repository.units.timespan[newValue];
	});
	$scope.$watch('character.height_unit', function(newValue, oldValue) {
		$scope.character.height = ($scope.character.height * $scope.repository.units.length[oldValue]) / $scope.repository.units.length[newValue];
	});
	$scope.$watch('character.weight_unit', function(newValue, oldValue) {
		$scope.character.weight = ($scope.character.weight * $scope.repository.units.weight[oldValue]) / $scope.repository.units.weight[newValue];
	});
}

function AttributeController($scope) {
	$scope.todos = [
		{text:'learn angular', done:true},
		{text:'build an angular app', done:false}
	];

	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done) $scope.todos.push(todo);
		});
	};
}