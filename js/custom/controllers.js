var photoStickerApp = angular.module('photoSticker', ['imageUpload']);

photoStickerApp.controller('photoStickerCtrl', ['$scope', '$window', 'PersistData', function ($scope, $window, PersistData) {

    var dropNode = $("#droppable");
    var hasLocalStoragePhoto = PersistData.getPhotoData();
    $scope.hasPhotoUploaded = false;
    /* Retrieve local storage to photo and stickers */
    if (hasLocalStoragePhoto) {
        $scope.blobPhoto = hasLocalStoragePhoto;
        $scope.hasPhotoUploaded = true;
    }
    $scope.stickerArray = PersistData.getStickerArray() || [];
    /*
    * Clear the Photo, stickers and localStorage too
    * */
    $scope.clearPhoto = function() {
       $scope.hasPhotoUploaded = false;
       dropNode.find('[data-sticker]').remove();
       $scope.stickerArray = [];
       PersistData.removePersistStorage();
    };

    $window.allowDrop = function(ev) {
        ev.preventDefault()
    }

    $window.drag = function(ev) {
        var dragNode = $(ev.target);
        var pos = dragNode.offset();
        $scope.onDragElem = {
            el: ev.target,
            clone: ev.target.cloneNode(),
            left: ev.clientX - pos.left,
            top: ev.clientY - pos.top
        }
    }

    /*
    * On Dropping the dragging sticker is cloned and put in droppable area with adjusting the position
    * */
    $window.drop  = function(ev) {
        ev.preventDefault();
        var pos = dropNode.offset();
        $scope.onDragElem.clone.removeAttribute('draggable');
        $scope.onDragElem.clone.removeAttribute('ondragstart');
        $scope.onDragElem.clone.setAttribute('data-sticker', true);
        $scope.onDragElem.clone.style.position = 'absolute';
        $scope.onDragElem.clone.style.left = (ev.clientX  - $scope.onDragElem.left - pos.left) + 'px';
        $scope.onDragElem.clone.style.top = (ev.clientY - $scope.onDragElem.top - pos.top) + 'px';
        dropNode.append($scope.onDragElem.clone);
    }

}]);
