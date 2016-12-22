// +++++ REQUIRED +++++ //
// USING whichTransitionEvent - Modernizr 
//https://davidwalsh.name/css-animation-callback
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }
    for(t in transitions){
        if( el.style[t] !== undefined ){      
            return transitions[t];
        }
    }  
}
var transitionEvent = whichTransitionEvent();
// /USING whichTransitionEvent - Modernizr
// /+++++ REQUIRED +++++ //