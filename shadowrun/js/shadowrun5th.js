function Shadowrun5thSheetController($scope)
{
	$scope.settings = {
		language: 'en-US'
	};

	$scope.repository = {
		'languages': {
			'en-US': {
				'_label'          : 'English (US)',
				'Personal Data'   : 'Personal Data',
				'Character'       : 'Character',
				'Player'          : 'Player',
				'Notes'           : 'Notes',
				'Name'            : 'Name',
				'Primary Alias'   : 'Primary Alias',
				'Metatype'        : 'Metatype',
				'Ethnicity'       : 'Ethnicity',
				'Age'             : 'Age',
				'Sex'             : 'Sex',
				'Height'          : 'Height',
				'Weight'          : 'Weight',
				'Streed Cred'     : 'Streed Cred',
				'Notoriety'       : 'Notoriety',
				'Public Awareness': 'Public Awareness',
				'Karma'           : 'Karma',
				'Total Karma'     : 'Total Karma',
				'Misc'            : 'Misc',
				'Human'           : 'Human',
				'Elf'             : 'Elf',
				'Dwarf'           : 'Dwarf',
				'Orc'             : 'Orc',
				'Troll'           : 'Troll'
			},
			'de-DE': {
				'_label'          : 'Deutsch',
				'Personal Data'   : 'Persönliche Daten',
				'Character'       : 'Charakter',
				'Player'          : 'Spieler',
				'Notes'           : 'Notizen',
				'Name'            : 'Name',
				'Primary Alias'   : 'Straßenname',
				'Metatype'        : 'Metatyp',
				'Ethnicity'       : 'Ethnie',
				'Age'             : 'Alter',
				'Sex'             : 'Geschlecht',
				'Height'          : 'Größe',
				'Weight'          : 'Gewicht',
				'Streed Cred'     : 'Straßenruf',
				'Notoriety'       : 'Schlechter Ruf',
				'Public Awareness': 'Bekanntheit',
				'Karma'           : 'Karma',
				'Total Karma'     : 'Gesamtes Karma',
				'Misc'            : 'Verschiedenes',
				'Human'           : 'Mensch',
				'Elf'             : 'Elf',
				'Dwarf'           : 'Zwerg',
				'Orc'             : 'Ork',
				'Troll'           : 'Troll'
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
		}
	};

	$scope.repository.languages_available = [];
	$scope.repository.metatypes_available = [];

	for(var key in $scope.repository.languages) $scope.repository.languages_available.push(key);
	for(var key in $scope.repository.metatypes) $scope.repository.metatypes_available.push(key);

	$scope.i18n = function(key) {
		if (typeof $scope.repository.languages[$scope.settings.language][key] !== 'undefined') {
			return $scope.repository.languages[$scope.settings.language][key];
		}
		return '[***['+key+']***]';
	}
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