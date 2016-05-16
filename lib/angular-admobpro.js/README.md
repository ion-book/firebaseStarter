AdMob Pro for AngularJS
==========

AngularJS extension on top of [AdMob Pro Cordova Plugin](https://github.com/floatinghotpot/cordova-admob-pro)

# Installation

Firstly you need to install [AdMob Pro](https://github.com/floatinghotpot/cordova-admob-pro) on your Cordova Project.

    cordova plugin add cordova-plugin-admobpro

Then you can proceed installing angular-admobpro using bower:

    bower install angular-admobpro --save

Then add the sources to your code (adjust paths as needed) after adding the dependencies for Angular first:

```html
<script src="../bower_components/angular/angular.min.js"></script>
<script src="/bower_components/angular-chart.js/dist/angular-chart.js"></script>
```

# Methods

#### $adMob.position.AD_POSITION

You have to replace AD_POSITION with one of the following values:
NO_CHANGE, TOP_LEFT, TOP_CENTER, TOP_RIGHT, LEFT, CENTER, RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, POS_XY

#### $adMob.size.AD_SIZE

You have to replace AD_SIZE with one of the following values:
SMART_BANNER, BANNER, MEDIUM_RECTANGLE, FULL_BANNER, LEADERBOARD, SKYSCRAPER


#### $adMob.setOptions(options);

```javascript
var options = {
    adSize: string,   // banner type size
    width: integer,   // banner width, if set adSize to 'CUSTOM'
    height: integer,  // banner height, if set adSize to 'CUSTOM'
    position: integer, // default position
    x: integer,   // default X of banner
    y: integer,   // default Y of banner
    isTesting: boolean,   // if set to true, to receive test ads
    autoShow: boolean,    // if set to true, no need call showBanner or showInterstitial
    adExtra: {}
};

$adMob.setOptions(options);
```

#### $adMob.createBanner(adId/options);

```javascript
var data = {
    adId: string,       // your ad key
    adSize: string,   // banner type size
    width: integer,   // banner width, if set adSize to 'CUSTOM'
    height: integer,  // banner height, if set adSize to 'CUSTOM'
    position: integer, // default position
    x: integer,   // default X of banner
    y: integer,   // default Y of banner
    isTesting: boolean,   // if set to true, to receive test ads
    autoShow: boolean,    // if set to true, no need call showBanner or showInterstitial
    adExtra: {}
};

$adMob.createBanner(data);
```

#### $adMob.removeBanner();
```javascript
$adMob.removeBanner();
```

#### $adMob.showBanner(position);
```javascript
$adMob.showBanner(position);
```

#### $adMob.showBanner(position);
```javascript
$adMob.showBanner(position);
```

#### $adMob.showBannerAtXY(x, y);
```javascript
$adMob.showBannerAtXY(x, y);
```

#### $adMob.prepareInterstitial(adId/options);
```javascript
var data = {
    adId: string,       // your ad key
    adSize: string,   // banner type size
    width: integer,   // banner width, if set adSize to 'CUSTOM'
    height: integer,  // banner height, if set adSize to 'CUSTOM'
    position: integer, // default position
    x: integer,   // default X of banner
    y: integer,   // default Y of banner
    isTesting: boolean,   // if set to true, to receive test ads
    autoShow: boolean,    // if set to true, no need call showBanner or showInterstitial
    adExtra: {}
};

$adMob.prepareInterstitial(data);
```

#### $adMob.showInterstitialAd();
```javascript
$adMob.showInterstitialAd();
```



# How to use with Ionic Framework
```javascript
angular.module('yourApp', ['ionic', 'admob'])
    .run(function($rootScope, $state, $log, $adMob) {

        $ionicPlatform.ready(function() {
            // AdMob
            if(window.AdMob) {
                var admobid;

                if (device.platform == "Android") {
                    admobid = { // for Android
                        banner: 'ca-app-pub-your-ad-key',
                        interstitial: 'ca-app-pub-your-ad-key'
                    };
                } else {
                    admobid = { // for iOS
                        banner: 'ca-app-pub-your-ad-key',
                        interstitial: 'ca-app-pub-your-ad-key'
                    };
                }

                $adMob.createBanner( {
                    adId: admobid.banner,
                    autoShow: true,
                    bgColor: 'black',
                    position: $adMob.position.BOTTOM_CENTER
                });

                $adMob.prepareInterstitial({
                    adId: admobid.interstitial,
                    autoShow: false
                });
            }
        });
    });
```

