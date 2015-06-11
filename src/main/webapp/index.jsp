<html>
<body ng-app="index">
    <div ng-controller="mainController">
        <button ng-click="click()">click</button>

        <span>{{ person.age }}</span>
        </br>

        <button ng-click="click3()">click3</button>
        <span ng-repeat="element in list">{{element}}</br></span>

        </br>

        <input id="input" type="text" ng-model="input">
        <button ng-click="click2()">click2</button>

        </br>

        <a href='#template1'>template1</a>
        <a href='#template2'>template2</a>
    </div>

    <div ng-view></div>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-resource.js"></script>
<script src="resources/app.js"></script>
<script src="resources/controllers/mainController.js"></script>
<script src="resources/services/mainService.js"></script>

</html>
