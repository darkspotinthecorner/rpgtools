var Shadowrun5thSheet = angular.module('Shadowrun5thSheet', []);

Shadowrun5thSheet.factory('metatypeProvider', function() {
	metatypes = {
		'human': {
			'label'     : 'Metatype.Human',
			'attributes': {
				'body'     : {'base': 1, 'max': 6},
				'agility'  : {'base': 1, 'max': 6},
				'reaction' : {'base': 1, 'max': 6},
				'strength' : {'base': 1, 'max': 6},
				'willpower': {'base': 1, 'max': 6},
				'logic'    : {'base': 1, 'max': 6},
				'intuition': {'base': 1, 'max': 6},
				'charisma' : {'base': 1, 'max': 6},
				'edge'     : {'base': 2, 'max': 7},
				'essence'  : {'base': 6, 'max': 6}
			}
		},
		'elf'  : {
			'label'     : 'Metatype.Elf',
			'attributes': {
				'body'     : {'base': 1, 'max': 6},
				'agility'  : {'base': 2, 'max': 7},
				'reaction' : {'base': 1, 'max': 6},
				'strength' : {'base': 1, 'max': 6},
				'willpower': {'base': 1, 'max': 6},
				'logic'    : {'base': 1, 'max': 6},
				'intuition': {'base': 1, 'max': 6},
				'charisma' : {'base': 3, 'max': 8},
				'edge'     : {'base': 1, 'max': 6},
				'essence'  : {'base': 6, 'max': 6}
			},
			'features': {
				'vision': [
					'night'
				]
			}
		},
		'dwarf': {
			'label'     : 'Metatype.Dwarf',
			'attributes': {
				'body'     : {'base': 3, 'max': 8},
				'agility'  : {'base': 1, 'max': 6},
				'reaction' : {'base': 1, 'max': 5},
				'strength' : {'base': 3, 'max': 8},
				'willpower': {'base': 2, 'max': 7},
				'logic'    : {'base': 1, 'max': 6},
				'intuition': {'base': 1, 'max': 6},
				'charisma' : {'base': 1, 'max': 6},
				'edge'     : {'base': 1, 'max': 6},
				'essence'  : {'base': 6, 'max': 6}
			},
			'features': {
				'vision': [
					'infrared'
				]
			}
		},
		'orc'  : {
			'label'     : 'Metatype.Orc',
			'attributes': {
				'body'     : {'base': 4, 'max': 9},
				'agility'  : {'base': 1, 'max': 6},
				'reaction' : {'base': 1, 'max': 6},
				'strength' : {'base': 3, 'max': 8},
				'willpower': {'base': 1, 'max': 6},
				'logic'    : {'base': 1, 'max': 5},
				'intuition': {'base': 1, 'max': 6},
				'charisma' : {'base': 1, 'max': 5},
				'edge'     : {'base': 1, 'max': 6},
				'essence'  : {'base': 6, 'max': 6}
			},
			'features': {
				'vision': [
					'night'
				]
			}
		},
		'troll': {
			'label'     : 'Metatype.Troll',
			'attributes': {
				'body'     : {'base': 5, 'max': 10},
				'agility'  : {'base': 1, 'max': 5},
				'reaction' : {'base': 1, 'max': 6},
				'strength' : {'base': 5, 'max': 10},
				'willpower': {'base': 1, 'max': 6},
				'logic'    : {'base': 1, 'max': 5},
				'intuition': {'base': 1, 'max': 5},
				'charisma' : {'base': 1, 'max': 4},
				'edge'     : {'base': 1, 'max': 6},
				'essence'  : {'base': 6, 'max': 6}
			},
			'features': {
				'vision': [
					'infrared'
				]
			}
		}
	};
	return function(metatypeid) {
		if (typeof metatypes[metatypeid] !== 'undefined') {
			return metatypes[metatypeid];
		}
		return false;
	};
});

function Shadowrun5thSheetController($scope)
{
	$scope.character = {
		'metatype'        : 'human',
		'gender'          : 'female',
		'age'             : 1,
		'age_unit'        : 'years',
		'height'          : 0,
		'height_unit'     : 'meters',
		'weight'          : 0,
		'weight_unit'     : 'kilogramms',
		'street_cred'     : 0,
		'notoriety'       : 0,
		'public_awareness': 0,
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
				'Gender.Male'                  : 'Male',
				'Gender.Female'                : 'Female',
				'Metatype.Human'               : 'Human',
				'Metatype.Elf'                 : 'Elf',
				'Metatype.Dwarf'               : 'Dwarf',
				'Metatype.Orc'                 : 'Orc',
				'Metatype.Troll'               : 'Troll',
				'Attribute.Body'               : 'Body',
				'Attribute.Agility'            : 'Agility',
				'Attribute.Reaction'           : 'Reaction',
				'Attribute.Strength'           : 'Strength',
				'Attribute.Willpower'          : 'Willpower',
				'Attribute.Logic'              : 'Logic',
				'Attribute.Intuition'          : 'Intuition',
				'Attribute.Charisma'           : 'Charisma',
				'Attribute.Edge'               : 'Edge',
				'Attribute.Edge Points'        : 'Edge Points',
				'Attribute.Essence'            : 'Essence',
				'Attribute.Magic'              : 'Magic',
				'Attribute.Resonance'          : 'Resonance',
				'Attribute.Initiative'         : 'Initiative',
				'Attribute.Matrix Initiative'  : 'Matrix Initiative',
				'Attribute.Astral Initiative'  : 'Astral Initiative',
				'Attribute.Composure'          : 'Composure',
				'Attribute.Judge Intentions'   : 'Judge Intentions',
				'Attribute.Memory'             : 'Memory',
				'Attribute.Lift'               : 'Lift',
				'Attribute.Carry'              : 'Carry',
				'Attribute.Movement'           : 'Movement',
				'Attribute.Physical Limit'     : 'Physical Limit',
				'Attribute.Mental Limit'       : 'Mental Limit',
				'Attribute.Social Limit'       : 'Social Limit'
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
				'Public Awareness'             : 'Prominenz',
				'Karma'                        : 'Karma',
				'Total Karma'                  : 'Gesamtes Karma',
				'Misc'                         : 'Sonstiges',
				'Gender.Male'                  : 'Männlich',
				'Gender.Female'                : 'Weiblich',
				'Metatype.Human'               : 'Mensch',
				'Metatype.Elf'                 : 'Elf',
				'Metatype.Dwarf'               : 'Zwerg',
				'Metatype.Orc'                 : 'Ork',
				'Metatype.Troll'               : 'Troll',
				'Attribute.Body'               : 'Konstitution',
				'Attribute.Agility'            : 'Geschicklichkeit',
				'Attribute.Reaction'           : 'Reaktion',
				'Attribute.Strength'           : 'Stärke',
				'Attribute.Willpower'          : 'Willenskraft',
				'Attribute.Logic'              : 'Logik',
				'Attribute.Intuition'          : 'Intuition',
				'Attribute.Charisma'           : 'Charisma',
				'Attribute.Edge'               : 'Edge',
				'Attribute.Edge Points'        : 'Edgepunkte',
				'Attribute.Essence'            : 'Essenz',
				'Attribute.Magic'              : 'Magie',
				'Attribute.Resonance'          : 'Resonanz',
				'Attribute.Initiative'         : 'Initiative',
				'Attribute.Matrix Initiative'  : 'Matrix-Initiative',
				'Attribute.Astral Initiative'  : 'Astrale Initiative',
				'Attribute.Composure'          : 'Selbstbeherrschung',
				'Attribute.Judge Intentions'   : 'Menschenkenntnis',
				'Attribute.Memory'             : 'Erinnerungsvermögen',
				'Attribute.Lift'               : 'Heben',
				'Attribute.Carry'              : 'Tragen',
				'Attribute.Movement'           : 'Bewegung',
				'Attribute.Physical Limit'     : 'Körperliches Limit',
				'Attribute.Mental Limit'       : 'Geistiges Limit',
				'Attribute.Social Limit'       : 'Soziales Limit'
			}
		},
		'metatypes': {
			'human': {
				'label'     : 'Metatype.Human',
				'attributes': {
					'body'     : {'base': 1, 'max': 6},
					'agility'  : {'base': 1, 'max': 6},
					'reaction' : {'base': 1, 'max': 6},
					'strength' : {'base': 1, 'max': 6},
					'willpower': {'base': 1, 'max': 6},
					'logic'    : {'base': 1, 'max': 6},
					'intuition': {'base': 1, 'max': 6},
					'charisma' : {'base': 1, 'max': 6},
					'edge'     : {'base': 2, 'max': 7},
					'essence'  : {'base': 6, 'max': 6}
				}
			},
			'elf'  : {
				'label'     : 'Metatype.Elf',
				'attributes': {
					'body'     : {'base': 1, 'max': 6},
					'agility'  : {'base': 2, 'max': 7},
					'reaction' : {'base': 1, 'max': 6},
					'strength' : {'base': 1, 'max': 6},
					'willpower': {'base': 1, 'max': 6},
					'logic'    : {'base': 1, 'max': 6},
					'intuition': {'base': 1, 'max': 6},
					'charisma' : {'base': 3, 'max': 8},
					'edge'     : {'base': 1, 'max': 6},
					'essence'  : {'base': 6, 'max': 6}
				},
				'features': {
					'vision': [
						'night'
					]
				}
			},
			'dwarf': {
				'label'     : 'Metatype.Dwarf',
				'attributes': {
					'body'     : {'base': 3, 'max': 8},
					'agility'  : {'base': 1, 'max': 6},
					'reaction' : {'base': 1, 'max': 5},
					'strength' : {'base': 3, 'max': 8},
					'willpower': {'base': 2, 'max': 7},
					'logic'    : {'base': 1, 'max': 6},
					'intuition': {'base': 1, 'max': 6},
					'charisma' : {'base': 1, 'max': 6},
					'edge'     : {'base': 1, 'max': 6},
					'essence'  : {'base': 6, 'max': 6}
				},
				'features': {
					'vision': [
						'infrared'
					]
				}
			},
			'orc'  : {
				'label'     : 'Metatype.Orc',
				'attributes': {
					'body'     : {'base': 4, 'max': 9},
					'agility'  : {'base': 1, 'max': 6},
					'reaction' : {'base': 1, 'max': 6},
					'strength' : {'base': 3, 'max': 8},
					'willpower': {'base': 1, 'max': 6},
					'logic'    : {'base': 1, 'max': 5},
					'intuition': {'base': 1, 'max': 6},
					'charisma' : {'base': 1, 'max': 5},
					'edge'     : {'base': 1, 'max': 6},
					'essence'  : {'base': 6, 'max': 6}
				},
				'features': {
					'vision': [
						'night'
					]
				}
			},
			'troll': {
				'label'     : 'Metatype.Troll',
				'attributes': {
					'body'     : {'base': 5, 'max': 10},
					'agility'  : {'base': 1, 'max': 5},
					'reaction' : {'base': 1, 'max': 6},
					'strength' : {'base': 5, 'max': 10},
					'willpower': {'base': 1, 'max': 6},
					'logic'    : {'base': 1, 'max': 5},
					'intuition': {'base': 1, 'max': 5},
					'charisma' : {'base': 1, 'max': 4},
					'edge'     : {'base': 1, 'max': 6},
					'essence'  : {'base': 6, 'max': 6}
				},
				'features': {
					'vision': [
						'infrared'
					]
				}
			}
		},
		'genders': {
			'male'  : 'Gender.Male',
			'female': 'Gender.Female'
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
		getUnitFactor: function(unittype, unitkey) {
			for (var i = $scope.repository.units[unittype].length - 1; i >= 0; i--) {
				if ($scope.repository.units[unittype][i]['id'] == unitkey)
				{
					return $scope.repository.units[unittype][i]['factor'];
				}
			};
			return 1;
		}
	}

	$scope.$watch('character.age_unit', function(newValue, oldValue) {
		$scope.character.age = ($scope.character.age * $scope.i18n.getUnitFactor('timespan', oldValue)) / $scope.i18n.getUnitFactor('timespan', newValue);
	});
	$scope.$watch('character.height_unit', function(newValue, oldValue) {
		$scope.character.height = ($scope.character.height * $scope.i18n.getUnitFactor('length', oldValue)) / $scope.i18n.getUnitFactor('length', newValue);
	});
	$scope.$watch('character.weight_unit', function(newValue, oldValue) {
		$scope.character.weight = ($scope.character.weight * $scope.i18n.getUnitFactor('weight', oldValue)) / $scope.i18n.getUnitFactor('weight', newValue);
	});
}
