app.factory('customerService', function($http){
    return {
        getCustomers : function(){
            return $http.get('http://www.w3schools.com/angular/customers.php');
        }
    };
});