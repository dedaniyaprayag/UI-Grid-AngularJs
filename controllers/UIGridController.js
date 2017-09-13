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
				headerCellClass : "grid-align",
    			cellTemplate : '<span><div class="grid-text-overflow" tooltip-class="tooltip-custom" uib-tooltip = "{{row.entity.name}}" tooltip-placement = "top" tooltip-append-to-body = "true"><div class = "ui-grid-cell-contents">{{COL_FIELD}}</div></div></span>'
			},
			{
				field: "age",
				displayName: "Age",
				cellClass : "grid-align",
				headerCellClass : "grid-align",
				cellTemplate : '<span><div class="grid-text-overflow" tooltip-class="tooltip-custom" uib-tooltip = "{{row.entity.age}}" tooltip-placement = "top" tooltip-append-to-body = "true"><div class = "ui-grid-cell-contents">{{COL_FIELD}}</div></div></span>'
			},
			{
				field : "location",
				displayName : "Location",
				cellClass : "grid-align",
				headerCellClass : "grid-align",
				cellTemplate : '<span><div class="grid-text-overflow" tooltip-class="tooltip-custom" uib-tooltip = "{{row.entity.location}}" tooltip-placement = "top" tooltip-append-to-body = "true"><div class = "ui-grid-cell-contents">{{COL_FIELD}}</div></div></span>'
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