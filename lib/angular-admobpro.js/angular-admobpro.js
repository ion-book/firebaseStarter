angular.module('admob', [])
  .factory('$adMob', ['$q', '$window', function ($q, $window) {
    return {
      setOptions: function (options) {
        var d = $q.defer();

        $window.AdMob.setOptions(options, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      createBanner: function (args) {
        var d = $q.defer();

        $window.AdMob.createBanner(args, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      removeBanner: function () {
        var d = $q.defer();

        $window.AdMob.removeBanner(function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      hideBanner: function () {
        var d = $q.defer();

        $window.AdMob.hideBanner(function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      showBanner: function (position) {
        var d = $q.defer();

        $window.AdMob.showBanner(position, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      showBannerAtXY: function (x, y) {
        var d = $q.defer();

        $window.AdMob.showBannerAtXY(x, y, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      prepareInterstitial: function (args) {
        var d = $q.defer();

        $window.AdMob.prepareInterstitial(args, function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      showInterstitial: function () {
        var d = $q.defer();

        $window.AdMob.showInterstitial(function (response) {
          d.resolve(response);
        }, function (error) {
          d.reject(error);
        });

        return d.promise;
      },

      position: {
        NO_CHANGE: 0,
        TOP_LEFT: 1,
        TOP_CENTER: 2,
        TOP_RIGHT: 3,
        LEFT: 4,
        CENTER: 5,
        RIGHT: 6,
        BOTTOM_LEFT: 7,
        BOTTOM_CENTER: 8,
        BOTTOM_RIGHT: 9,
        POS_XY: 10
      },

      size: {
        SMART_BANNER: 'SMART_BANNER',
        BANNER: 'BANNER',
        MEDIUM_RECTANGLE: 'MEDIUM_RECTANGLE',
        FULL_BANNER: 'FULL_BANNER',
        LEADERBOARD: 'LEADERBOARD',
        SKYSCRAPER: 'SKYSCRAPER'
      }
  };
}]);
