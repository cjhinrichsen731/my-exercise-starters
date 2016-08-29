// JavaScript File
angular.module("AngularIntro", [])
    .controller("AngButton", AngButtonController);


function AngButtonController() {
    var cCtrl = this;
    cCtrl.h1 = false;


    function angConsole() {
        console.log("!!!!!!!!");
        cCtrl.h1 = true;
    }
    cCtrl.angConsole = angConsole;
    
    cCtrl.ol = false;

    function angList() {
        cCtrl.div = true;
    }
    cCtrl.angList=angList;
}

