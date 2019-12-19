(function (window) {
    
    window.angular.module("TodoApp", []);
   
    window.angular.module("TodoApp").controller("MainController", ["$scope", function ($scope) {
       
        $scope.textValue = "";  
        $scope.todoList = [
            { textValue: "吃饭", done: false },
          
        ]; 
        $scope.addTask = function () {
            var textValue = $scope.textValue.trim();
            if (textValue) {
              
                $scope.todoList.push({
                    textValue: textValue,
                    done: false
                });
                
                $scope.textValue = "";
            }
        }
       
        $scope.deleteTask = function (task) {
            var index = $scope.todoList.indexOf(task);
            $scope.todoList.splice(index, 1); 
        }
      
        $scope.updateDone = function () {
            var temp = $scope.todoList.filter(function (item) {
             
                return item.done;
            });
            return temp.length;
        }
    }]);
})(window);