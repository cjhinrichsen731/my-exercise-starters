// JavaScript File
angular.module("AngularIntro", [])
    .controller("AngButton", AngButtonController);


function AngButtonController() {
    var cCtrl = this;
    cCtrl.h1 = false;
    cCtrl.ol = false;

    function angConsole() {
        console.log("!!!!!!!!");
        cCtrl.h1 = !cCtrl.h1;
    }
    cCtrl.angConsole = angConsole;

    function angList() {
        cCtrl.div = !cCtrl.div;
    }
    cCtrl.angList=angList;
}

