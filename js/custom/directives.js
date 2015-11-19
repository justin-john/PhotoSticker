var photoStickerDirective = angular.module('imageUpload', ['ngFileUpload']);
/* Directive Controller */
var photoUploadController = ['$scope', 'PersistData', function ($scope, PersistData) {
    /* Photo Submit function in directive
    *  Set the file data to scope and in local storage
    * @type photo|sticker
    * */
    $scope.photoSubmit = function(type) {
         switch (type) {
            case 'photo':
                $scope.$parent.hasPhotoUploaded = true;
                $scope.$parent.blobPhoto = { src: $scope.file.$ngfBlobUrl, height: $scope.file.$ngfHeight, width: $scope.file.$ngfWidth };
                PersistData.setPhotoData($scope.$parent.blobPhoto);
                break;
            case 'sticker':
               $scope.$parent.stickerArray.push({ src: $scope.file.$ngfBlobUrl, height: $scope.$ngfHeight, width: $scope.ngfWidth });
                PersistData.setStickerArray($scope.$parent.stickerArray);
                break;
        }
        $scope.file = '';
   };


}];
/* Directive for Uploader */
photoStickerDirective.directive('photoUpload', function() {
  return {
    restrict: 'EA',
    scope: true,
    controller: photoUploadController,
    templateUrl: 'js/custom/template/upload.html',
    link: function(scope, elem, attrs) {
        scope.type = attrs.type;
        // File scope watch for Upload Btn Enable
        scope.$watch('file', function(n, o) {
            var submit = $(elem).find('[type="submit"]');
            if (n) {
                submit.removeClass('disabled').addClass('btn-success').text('Upload');
            } else {
                submit.removeClass('btn-success').addClass('disabled').text('No file to Upload');
            }
        })
    }
  };
});
/* Service for setting localStorage */
photoStickerDirective.service('PersistData', function () {
    this.setPhotoData = function (val) {
        localStorage.photoValue = JSON.stringify(val);
    };
    this.getPhotoData = function () {
        return localStorage.photoValue ? JSON.parse(localStorage.photoValue) : false;
    };
    this.setStickerArray = function (val) {
        localStorage.stickerArray = JSON.stringify(val);
    };
    this.getStickerArray = function () {
        return localStorage.stickerArray ? JSON.parse(localStorage.stickerArray) : false;
    };
    this.removePersistStorage = function() {
        localStorage.removeItem('photoValue');
        localStorage.removeItem('stickerArray');
    }
})