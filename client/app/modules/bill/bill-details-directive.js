angular
	.module('app.modules.bill')
	.directive('billDetails', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/modules/bill/bill-details.tpl.html',
			scope: {
				labels: '=',
				dataset: '=',
				fields: '=',
				total: '='
			}
		};
	});