MyRouterDemo.factory('indianStatesFactory', function(){
	

	var stateCapitalData = [
	                        {id: 1, name: 'Bihari', capital: 'patna'},
        					{id: 2, name: 'Uttar Pradesh', capital: 'Lucknow'},
					        {id: 3, name: 'Delhi', capital: 'New Delhi'},
							{id: 4, name: 'Jharkhand', capital: 'Ranchi'},
					        {id: 5, name: 'Jammu and kashmir', capital: 'Sri Nagar'},
					        {id: 6, name: 'Rajsthan', capital: 'Jaipur'}
						    ];
  
   
var indianstatesObj = {}

  indianstatesObj.getData = function(){
  	return stateCapitalData;
  }
 
	return indianstatesObj;
	
});



MyRouterDemo.factory('friendFactory', function(){
	

	var friendlist = [
        {id: 1, name: 'ramesh', title: 'singh'},
        {id: 2, name: 'shyam', title: 'thakur'},
        {id: 3, name: 'mohan', title: 'kumar'},
        {id: 4, name: 'puneet', title: 'verma'}
    ];
  
   
var friendFactoryObj = {}

  friendFactoryObj.getData = function(){
  	return friendlist;
  }
 
	return friendFactoryObj;
	
});