/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function TodoCtrl($scope, $http){
 
  
 
  
  $scope.todos= [
    
    ];
  
  //get number of todos
   $scope.getTotal = function () {
    return $scope.todos.length;
  };
  
  //add todo
  $scope.addTodo = function (){
    
    
    var newItem = {
      done:false,
      text: $scope.todoText
    };
    
    $scope.todos.push(newItem);
    $scope.todoText='';
    
  };
  
  //remove todo
  $scope.removeTodo = function(start){
    $scope.todos.splice(start,1);
    
  };
  
  
  
  //move todo
  $scope.move = function(index,direction){
    if(direction==='up'){
      if(index===0){
        return;
      }
      index=index-1;
    }
    if(direction==='down'){
       if(index === $scope.todos.length-1){
      return;
    }
      
    }
   
    var todo=$scope.todos[index];
    $scope.todos.splice(index + 2 , 0 , todo);
    $scope.todos.splice(index,1);
  };
  
 
 
  
  
  
}