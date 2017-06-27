define(['ojs/ojcore', 'knockout'], function (oj, ko) {

    function DashboardChartHelperViewModule() {
       var self = this;
       
       self.stackValue = ko.observable('off');
       self.orientationValue = ko.observable('vertical');
        
       var barSeries = [{name: "Series 1", items: [74, 42, 70, 46]},
            {name: "Series 2", items: [50, 58, 46, 54]},
            {name: "Series 3", items: [34, 22, 30, 32]},
            {name: "Series 4", items: [18, 6, 14, 22]}];

       var barGroups = ["Group A", "Group B", "Group C", "Group D"];

       self.barSeriesValue = ko.observableArray(barSeries);
       self.barGroupsValue = ko.observableArray(barGroups);
       
       self.addGroupValue = function () {
           var barSeries = [{name: "Series 1", items: [74, 42, 70, 46, 34]},
                {name: "Series 2", items: [50, 58, 46, 54, 53]},
                {name: "Series 3", items: [34, 22, 30, 32, 87]},
                {name: "Series 4", items: [18, 6, 14, 22, 39]}];
            
           var barGroups = ["Group A", "Group B", "Group C", "Group D", "Group E"];
            
           self.barSeriesValue(barSeries);
           self.barGroupsValue(barGroups);
       };
       
       self.removeGroupValue = function () {
           var barSeries = [{name: "Series 1", items: [74, 42, 70, 46]},
               {name: "Series 2", items: [50, 58, 46, 54]},
               {name: "Series 3", items: [34, 22, 30, 32]},
               {name: "Series 4", items: [18, 6, 14, 22]}];
           
           var barGroups = ["Group A", "Group B", "Group C", "Group D"];
            
           self.barSeriesValue(barSeries);
           self.barGroupsValue(barGroups);
       };
    }

    return new DashboardChartHelperViewModule();
});