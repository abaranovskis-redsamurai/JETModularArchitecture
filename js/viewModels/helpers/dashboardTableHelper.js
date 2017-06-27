define(['ojs/ojcore', 'knockout', 'ojs/ojarraytabledatasource'], function (oj, ko) {

    function DashboardTableHelperViewModule() {
       var self = this;
       
       var dummyArray = [
                    {itemNr: '1', Customer: 'Globex Corporation', Country: 'BELGIUM', Percent: '27.39%'},
                    {itemNr: '2', Customer: 'Soylent Corp', Country: 'UNITED KINGDOM', Percent: '7.36%'},
                    {itemNr: '3', Customer: 'Massive Dynamic', Country: 'GERMANY', Percent: '17.22%'}];
       self.datasource = new oj.ArrayTableDataSource(dummyArray, {idAttribute: 'itemNr'});
    }

    return new DashboardTableHelperViewModule();
});