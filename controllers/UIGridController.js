var app = angular.module('uigridApp', ["ui.grid","ui.grid.exporter","ui.grid.pagination","ui.bootstrap"]);

app.controller("UIGridController",function(UIGridDataService){
	var self = this;

	self.gridOptions = {
		enableSorting : true,
		enableFiltering : true,
		paginationPageSizes: [10, 50,100],
		paginationPageSize: 10,
		columnDefs : [
			{
				field : "name",
				displayName : "Name",
				cellClass :"grid-align",
				headerCellClass : "grid-align"
			},
			{
				field: "age",
				displayName: "Age",
				cellClass : "grid-align",
				headerCellClass : "grid-align"
			},
			{
				field : "location",
				displayName : "Location",
				cellClass : "grid-align",
				headerCellClass : "grid-align"
			},
			{
				field : "active",
				displayName : "Active User",
				cellClass : "grid-align",
				headerCellClass : "grid-align",
				enableSorting: false,
				enableFiltering : false,
				cellTemplate : '<div ng-class ="{checked: (row.entity.active == 1), unChecked : (row.entity.active == 0)}">&nbsp;</div>'
			}

		],

		onRegisterApi : function(gridApi){
			self.gridApi = gridApi;
		},
		 exporterCsvFilename: 'userData.csv',
	};

	self.gridOptions.data = UIGridDataService.gridData;

	 self.exportIntoCSV = function() {
      self.gridApi.exporter.csvExport('all', 'all');
    };
});