namespace('Browser');

(function() {
  'use strict';

  Browser.Location = {
    change: function(url) {
      window.location.replace(url);
    },

    hash: function() {
      return window.location.hash;
    }
  };

  Browser.open = function(url, options) {
    return window.open(url, '_blank', options);
  };

  Browser.setTimeout = function(fn, timeInMilliseconds) {
    return window.setTimeout(fn, timeInMilliseconds);
  };

  Browser.setInterval = function(fn, timeInMilliseconds) {
    return window.setInterval(fn, timeInMilliseconds);
  };
}());
