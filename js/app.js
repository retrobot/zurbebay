(function (angular) {
 var myAppModule = angular.module('myApp', []);

myAppModule.directive('selectOnClick', function () {
    // Linker function
    return function (scope, element, attrs) {
        element.bind('click', function () {
        element[0].select();
      });
    };
  });

  // myAppModule.controller('Master', function ($scope) {
  //   $scope.content = 'foobar';
  // });
myAppModule.controller('Master', function ($scope) {
	// var toptext = 'client.send()';
  $scope.photosQuantity = parseInt($scope.photosQuantity);
  $scope.numberak = {};

  $scope.calc = function() {
    console.log(typeof +$scope.photosQuantity + "begin");
    var i = $scope.photosQuantity;
    while (i > 0) {
      $scope.numberak[i] = i;
      console.log($scope.numberak[i] + "insider");
      i--;
    };
  };

  var client = null;
	var chai;
	function getData() {
		client = new XMLHttpRequest();
		client.open('GET', 'data/text.txt');
		client.onreadystatechange = processRequest();
		var insider;
		client.send();
		// chai = client.chail;
		// return client.onreadystatechange
	};

	function processRequest() {
		if (client.readyState==4 && client.status==200) {
			// $scope.payment = 'Done:';// + client.responseText;
			//alert(client.responseText);
			//client.responseText;
			// return "DDD" + client.responseText;
			//this.blop = "aa" + client.responseText;
			// alert(th.blop);
		};
	};
	getData();


    var blop;
    // $http({ method: 'GET', url: text.txt }).success(function (data) {
    //     blop = data;
    // }).error(function (data) {
    //     blop = data || "Request failed";
    // });
	// alert(blop);

	$scope.payment = 'We must receive full payment both of the price of the Goods and any delivery charges before we can accept any offers. Where you select to pay by credit or debit card we will process the payment at the time of preparing your Goods for dispatch.';
	$scope.shipping = 'All deliveries are subject to stock availability and authorisation of your payment. We aim to deliver your item within three working days using Standard Delivery. There are a small number of postcodes, usually in remote rural areas, where we cannot guarantee delivery within our usual timescale, however we will notify you as soon as possible. Delivery will only be made to your billing address. We deliver to most postal areas in the UK. We reserve the right not to deliver orders if we believe the address is not secure, for example, to a communal postal address or PO Box. If this affects your order, we will notify you as soon as possible. A signature will be required on receipt of your goods being delivered. If you are not around to accept your parcel a calling card will be posted through your door to let you know a delivery has been attempted. Please note that orders are only dispatched Monday to Friday. If an order is placed by 3:30pm on Friday, it will be dispatched the same day. If an order is placed after this time, or on Saturday and Sunday, the order will be dispatched on Monday. Please note that orders are not dispatched on public holidays.';
	// $scope.result -
});

myAppModule.controller('FetchCtrl', function ($scope, $http, $templateCache) {
// function FetchCtrl($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = 'data/toptext.txt';
  $scope.numberos = null;

  $scope.fetch = function(insideurl, dataproperty) {
    $scope.code = null;
    $scope.response = null;
    $scope.url = insideurl;
    $scope.data = {};
    $scope.data[dataproperty] = null;

    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
      success(function(data, status) {
        $scope.status = status;
        $scope.data[dataproperty] = data.replace(/(\r\n|\n|\r)/gm,"");
      }).
      error(function(data, status) {
        $scope.data[dataproperty] = data || "Request failed";
        $scope.status = status;
    });
  };
 
  $scope.updateModel = function(method, url) {
    $scope.method = method;
    $scope.url = url;
  };

});

// function SecondCtrl($scope, $http, $templateCache) {
//   $scope.method = 'GET';
//   $scope.url = 'data/toptext.txt';
//   $scope.
 
//   $scope.fetch = function($givenvar, $urlurl) {
//     $scope.code = null;
//     $scope.response = null;
 
//     //$http({method: $scope.method, url: $scope.url, cache: $templateCache}).
//     $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
//       success(function(data, status) {
//         $scope.status = status;
//         $scope.data[$scope.uvenvar] = data.replace(/(\r\n|\n|\r)/gm,"");
//       }).
//       error(function(data, status) {
//         $scope.data[givenvar] = data || "Request failed";
//         $scope.status = status;
//     });
//   };
 
//   $scope.updateModel = function(method, url) {
//     $scope.method = method;
//     $scope.url = url;
//   };
// }


// // function FetchCtrl($scope, $http, $templateCache) {
// // 	$scope.method = 'GET';

// //   var data_a = $fetch, ("names.json"),
// //       data_b = $http.get("naughty.json"),
// //       nice = $http.get("nice.json"); 

// // function giftControler ($scope, $http, $q) {
// //   var names = $http.get("names.json"),
// //       naughty = $http.get("naughty.json"),
// //       nice = $http.get("nice.json");
// //   $q.all([names, naughty,nice]).then(function(arrayOfResults) { 
// //       ... This callback would be called when all promised would be resolved
// //     });

// // function SecondCtrl($scope, $http, $templateCache) {
// // 	$scope.data_a = $http.get('data/toptext.txt', {cache: false});
// // 	$scope.data_b = $http.get('data/bottomtext.txt', {'cache': false});

// // 	$q.all([$scope.product_list_1, $scope.product_list_2]).then(function(values) {
// // 	    $scope.results = data;
// // 	});
// // }


myAppModule.controller('ThirdCtrl', function ($scope, $http) {
// function ThirdCtrl($scope, $http) {
	$scope.fetch = function($givenvar, $urlurl) {
    $http({method: 'GET', url: urlurl, cache: $templateCache}).
      success(function(data, status) {
        $scope.status = status;
        givenvar = data.replace(/(\r\n|\n|\r)/gm,"");
      }).
      error(function(data, status) {
        givenvar = data || "Request failed";
        $scope.status = status;
    });
    fetch($scope.data_a, 'data/toptext.txt');
    fetch($scope.data_b, 'data/bottomtext.txt');
  };


	// $scope.bottomt = $http.get('data/bottomtext.txt', {cache: false});

	// $q.all([$scope.topt, $scope.bottomt]).then(function(values) {
	// 	$scope.results = MyService.doCalculation(values[0], values[1]);
	// });
});

myAppModule.controller('FourthCtrl', function ($scope, $http, $templateCache) {
// function FourthCtrl($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = 'data/toptext.txt';
  $scope.numberos = null;

  $scope.fetch = function(insideurl, dataproperty) {
    $scope.code = null;
    $scope.response = null;
    $scope.url = insideurl;
    $scope.dataproperty = {};
    $scope.dataproperty = dataproperty.split(",");
    console.log($scope.dataproperty[0]);
    $scope.data = {};
    // $scope.data[dataproperty] = null;

    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
      success(function(data, status) {
        $scope.dataprocessed = data.replace(/(\r\n|\n|\r)/gm,"").split("<!---------------------DELIMITER----------------->");
        $scope.status = status;
        for (element in $scope.dataproperty) {
          console.log($scope.dataproperty[element]);
          $scope.data[$scope.dataproperty[element]] = $scope.dataprocessed[element]; 
        };
      }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
    });
  };

  $scope.fetch_xml = function(fileurl, type) {
    $scope.code = null;
    $scope.response = null;
    $scope.url = fileurl;

    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
      success(function(data, status) {
        var x2js = new X2JS();
        var json = x2js.xml_str2json(data);
        if(type ==="avail") {
          $scope.xml = json;
          $scope.unparsedxml = data;
        } else if(type ==="items") {
          $scope.xmlitems = json;
          $scope.unparsed_itemsxml = data;
        }
          $scope.status = status;
      }).
      error(function(data, status) {
        $scope.parsedxml = data || "Request failed";
        $scope.status = status;
    });
  };
 
  $scope.updateModel = function(method, url) {
    $scope.method = method;
    $scope.url = url;
  };
});

}(angular)); 