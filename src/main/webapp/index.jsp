<html>
<body ng-app="index">
    <div ng-controller="mainController">
        <button ng-click="click()">click</button>

        <span>{{ person.age }}</span>
        </br>

        <input id="input" type="text" ng-model="input">
        <button ng-click="click2()">click2</button>
    </div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<script src="resources/app.js"></script>
<script src="resources/controllers/mainController.js"></script>
<script src="resources/services/mainService.js"></script>

</html>
