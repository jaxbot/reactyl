var changeCallbacks = [];
var currentPage;

module.exports = {
  addChangeListener: function(callback) {
    changeCallbacks.push(callback);
  },
  removeChangeListener: function(callback) {
    changeCallbacks.splice(changeCallbacks.indexOf(callback), 1);
  },
  getCurrentPage: function() {
    return currentPage;
  },
  emitChange: function() {
    for (var i = 0; i < changeCallbacks.length; i++) {
      changeCallbacks[i]();
    }
  },
  setCurrentPage: function(current) {
    currentPage = current;
  }
};
