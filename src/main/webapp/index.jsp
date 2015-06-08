<html>
<body ng-app="index">
    <div ng-controller="mainController">
        <button ng-click="click()">click</button>
        <button ng-click="click2()">click2</button>

        <span>{{ person.age }}</span>
    </div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<script src="resources/app.js"></script>
<script src="resources/controllers/mainController.js"></script>
<script src="resources/services/mainService.js"></script>

</html>
