(function(window){
    //I recommend this
    "use strict";
    function define_draw(){
        var japi = {};
        japi.ex = {};
        japi.ex.hi = function(test) {
            alert("hi");
        }
        return japi;

    }
    //define globally if it doesn't already exist
    if(typeof(draw) === 'undefined'){
        window.draw = define_draw();
    }
    else{
        console.log("japi has been already defined in a variable. please renmae all variables with the name canvas to a diffrent name for japi to work");
    }
})(window);
