'use strict';

/**
 * @ngdoc overview
 * @name testProjectApp
 * @description
 * # testProjectApp
 *
 * Main module of the application.
 */
var app = angular.module('testProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'thatisuday.ng-image-gallery'
]);

app.factory('Greeting', function () {
    return {text: 'Hello'};
});

app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });

    $routeProvider
        .when('/', {
            templateUrl: '/views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/edit', {
            templateUrl: '/views/edit.html',
            controller: 'EditCtrl',
            controllerAs: 'edit'
        })
        .when('/gallery', {
            templateUrl: '/views/gallery.html',
            controller: 'ImagesCtrl'
        })
        .when('/about', {
            templateUrl: '/views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.config(['ngImageGalleryOptsProvider', function (ngImageGalleryOptsProvider) {
    ngImageGalleryOptsProvider.setOpts({
        thumbnails: true,
        thumbSize: 120,
        inline: false,
        bubbles: false,
        bubbleSize: 20,
        imgBubbles: false,
        bgClose: true,
        piracy: false,
        imgAnim: 'zoom'
    });
}]);

app.controller('NavController', function () {
    this.tab = 'home';

    this.selectTab = function (setTab) {
        this.tab = setTab;
    };

    this.isSelected = function (checkTab) {
        return this.tab == checkTab;
    };
});
app.controller('AboutCtrl', function () {
    this.awesomeThings = 'Karma';
});
app.controller('ImagesCtrl', function ($scope) {
    // inside your app controller
    $scope.images = [
        {
            id: 1,
            thumbUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtFOg3D6-IbtHIApl8W53vQvVH1cT9Q0siCymKWZkotK96ISo',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtFOg3D6-IbtHIApl8W53vQvVH1cT9Q0siCymKWZkotK96ISo',
        },
        {
            id: 2,
            thumbUrl: 'data:image/jpeg;base64,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',
            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhASEBEQFREVEhgQEhAXGRIVFxISFxUXFhUSFRUYHSggGBolGxMVITEiJSorLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS4tLS0vLS0tLS0tLS0tLS0tLS0uLS0rLS0tLS0tLS0tLS0tLS0tLTUtLSstLf/AABEIASsAqAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUHBgj/xAA3EAACAQIEBAQEAwgDAQAAAAAAAQIDEQQSITEFIkFRBhMyYXGBkaEHQsEUI1KSsdHh8DNDciT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAgEDBAX/xAAhEQEBAQABBAMAAwAAAAAAAAAAAQIRAxIhMRNBUQQycf/aAAwDAQACEQMRAD8A6+ADo+OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKSdtXsarHYzMmo6R293/g6dPp3d4g2VGtGbai02t1+q7mQ83Sm4tNNo3uDxObllvbSXf2OvV6Hb5isSa/1nBVqxQ8zLOPYAAwAAAAAAAAAAAAAAAABbOaWraSBszb6g1FfESnvt0XQi1WZJOxgbPqYzJ6TqhJw09Ph1IyVyZThZG79GPaZQxslpLmX3JtOrCXpdn2Z5HiniChh61KlWqRhni5XadvUoxvLaK9WrstNza05qSUotOLScZJppp6pprdHl10s6eju+r5btqxQ1ca8ltJmR4pvf7HK9CudzOfCVVrdF9SuHqX0f1IqZlhPv9SriccOucxLasUMarWXdFn7R7HH46nXT4vhnAXcEOdlnsAAYAN9yBXx/SH8z/RF4xdehOlJLV6LuQq+PW0Nfd7fJEKpVcvU2yw9OP48n9hdObbu3dgtB6B5rC+LsJUnKHn01aObNKSjF80ovV6flT+EkbDhvFaOIjKVGalGNR0m1/FHV29rap9UcCjKxO4Zxeth7OjUlHnzuO8W1FxTcXo9JNfMmdX9Vel+O+RnZ6bkqnWT0/Na9vZWu/ujh0fGuN5LVEstN001GLdna8m5X5uVak7hnj7ERrUalZRqKFOdNpcjlmcW5O2jfIui6m3crJi5e+8S+D6eNfmOpKnWvlU7Z4+XHRQcG11zSumvU9zaeGuFSwtCNKVR1JJvnbqNNfltGTeSysrR00v1K8C43QxNNSozWiSlB6Sg7bSRtCVAAAJmSNV/ExgzhvKbSrp+z7GU1pkjWkupF6f4ub/WwhNrYy50/Y18cV3X0LpYqK7/A5Xp2/S7rNnlJcJdHdWbWu8m7pPTZfH5GKvjIx0Wr7f3ZAr4hy02Xbv8AEwl5/jz7efXHPhlr4iU93p26GIiY/iVGjBzq1IRgna7fXorLVs8I/wATZc3/AMsXvlfmNL2bWT9UeiSTxEujFlSrGPqlFddWl/U41jfGWNq713BdqaUNV1uub7nnsRiHNucpOUm7ylJuUn01b1Zl0qZdyl4owSnKm8VRUo768vwU/S37XuDhPnf1QHc3tRPNVysZ7/70ItwmeP5K9HanXKqW3sRI1dPlYkZtjpNSpsTcJDO1FuCvK2aWkY36t2dl7nYuAeEalCMvMxlablCCjGMqsI0pR1snGpzR6bLTscTjK39u517hH4hUZefnio0qXlRpz5uaMrQd462s7vfbva76yudj1lHC05RzN1lvmTrYjla9SfP07kTC4VQi88sRJuLqwvWr3eZ38r17xclFezju7l08bGajKjzqveGWLV3GLyusrtaKOjb7w7azqmF8zK6r2lnUItpKS2blo5bvsvY1jV1MJGOWi61bzPWpOtiM0orXVKd3zWi1/C/pR4Vzu4rGJT5GvNxEHRS/Os80rvm2vq4aWubynTUVaKSXZJJfYsoYmE8+ScZZJOnOzTyzSTcX2dmvqBq1gp+pxxLkll8vz6iUl1l/y6NvVe2nVsxfsbj6/wBrtB+ZmVWvJ1b707QqN2XNZO3/AF6uzN3KfYtbNmU8tJCnDM4eZXU6vNGLrYhOmtpJJzurLL8ZSfTa+eBUoKmqldVGnB1POr5oqOkqms93pb/0t1cm8QxlKlFOvOEYSkoLNa0pSdlG3UrHBqMpSp8rlbMndxdtFp+XTtb4MrhnLBDD0/LU5OsllUn+9xDtpqvXq76Gr4r4anXhFRxVejPO6kuetUsmrKmr1FZLTXq79zaUJNzcJrKoSdRJtPzG3mzRfWMW373yvS2us8X+IVh8LKpTac5Xp03o7S1Wa3XZ/wCR4HKOL8NlhqsqU3Tc16nB5km/yt20l3XuQPMV2iuLxsqrlOpKUqknmlJ6tv8A2xr6k+Z/BnLW+HTOeWdzf9SyUrEd1np8C11Lp37I5XqR1mUlzS6giSlewJ+RvatAByUF+d6exYDeRMjPS/uXRlpo9H9yFmL6dWyOs6iLl7HwV4knhq1CLl+5cnCcXtGM2tV2s7vtzPRXd+q8a8TU8NVcJ7LDSxHxanGMYq3x+/scCUyViMfUmoxlOTjCHlwTd8sbp5V7aLQ6zSLH0Hw3idPEU5zovNFScL7XaS2vtueK/D6rHDyrUq2anVr4mflUpZXmUE7tNa6WlG7dm1prc8TwnxbWw2lFRjF1J1JQV8snKnGCT66NZvobetxmnUxmBqylCCVOrVdRyacJznVlBSaWrXLo9HfW1ypU2OuA5LwP8Qp0KThUVStUdaVTPJq2SWuXXVc3Ton8iNhvxFrQjWzxvOq9HG6ycjjdXb65X8iruRPZU/x/UlieI0MNBuahKMfK0SUpZZT5u7j32t8j2HEvFdGg6ak+S1eMpPfPQssunVu/1RzbHeJ/3uKqUFJTqTzUq1lmgpRjGdusfTo9Xr31NJXx8pwUJNvnnUb7yna7ffYnuV2vf+KeOSr8Lw1RaSqVGptdLKpGS7pPb3Wmt7HO6uLqSjCEpycILLCLekVdtJfzS+pkr8Um6FOg/wDjhJ1Laayk99r6L36vua7z9iNbn2vOV1eWhGcupWUrstOGtc10k4AAQ0AAAAAAAAAAGRS5WvcrCp39jECu6s4S3P026lcyIiYbL+RnamOSRim8zt2e5hcn+pXPv7i75JEipUt9f0LadS7+RHuVjKxnf5O0nO9y0AhQADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgALp26X/wAgtAH/2Q==',
        },
        {
            id: 3,
            thumbUrl: 'data:image/jpeg;base64,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',
            url: 'data:image/jpeg;base64,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'
        },
        {
            id: 4,
            thumbUrl: 'https://s-media-cache-ak0.pinimg.com/736x/ec/7a/4d/ec7a4d915fb15c103c4b20d18d01b708--cellphone-wallpaper-wall-papers.jpg',
            url: 'https://s-media-cache-ak0.pinimg.com/736x/ec/7a/4d/ec7a4d915fb15c103c4b20d18d01b708--cellphone-wallpaper-wall-papers.jpg'
        },
        {
            id: 5,
            thumbUrl: 'http://cdn.iphonehacks.com/wp-content/uploads/2017/05/minimal_wallpaper_5_iphone.jpg',
            url: 'http://cdn.iphonehacks.com/wp-content/uploads/2017/05/minimal_wallpaper_5_iphone.jpg'
        }
    ];

    // gallery methods
    $scope.methods = {};

    // so you will bind openGallery method to a button on page
    // to open this gallery like ng-click="openGallery();"
    $scope.openGallery = function () {
        $scope.methods.open();

        // You can also open gallery model with visible image index
        // Image at that index will be shown when gallery modal opens
        //scope.methods.open(index);
    };

    // Similar to above function
    $scope.closeGallery = function () {
        $scope.methods.close();
    };

    $scope.nextImg = function () {
        $scope.methods.next();
    };

    $scope.prevImg = function () {
        $scope.methods.prev();
    };

    $scope.addPhoto = function (url) {
        var n = Math.floor(Math.random() * 13) + 1;
        $scope.images.push(
            {
                url: url
            }
        );
    };
});
