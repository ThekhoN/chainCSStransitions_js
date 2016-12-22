//init
var _ele = document.getElementById('ele');
var _initTransitionNew = document.getElementById('initTransitionNew');
_initTransitionNew.addEventListener('click', function() {
    chainTransition(_ele);
});

//CUSTOM CSStranstionEnd detect for chaining. . .
function onCSSTransitionEndX99(el, propertyName, callbackFunct) {
    console.log('using detect onCSSTransitionEnd. . .');
    transitionEvent && el.addEventListener(transitionEvent, function(e) {
        console.log('transitionedPropertyName: ', e.propertyName);
        if (e.propertyName == propertyName) {
            if (callbackFunct) {
                console.log('callback defined, init callback. . .')
                callbackFunct();
            } else {
                console.log('no callback defined. . .')
                return;
            }
        } else {
            console.log('transitioning newProperty. . .');
            return;
        }
    });
}

//TransitionChain 
function chainTransition(el) {
    //fallback
    if (!transitionEvent) {
        console.log('transitionEvent/CSS Transitions not supported. . .');
        //run style changes anyway
        console.log('run style changes anyway. . .')
        transitionHeight(el);
        transitionWidth(el);
        transitionOpacity(el);
        return;
    }
    console.log('running chainAnim. . .');
    //chain to run after first transition
    onCSSTransitionEndX99(el, 'height', function() {
        transitionWidth(el);
        onCSSTransitionEndX99(el, 'width', function() {
            transitionOpacity(el);
        });
    });
    //first transition
    transitionHeight(el);
}

//transitions
function transitionHeight(el) {
    el.style.height = '220px';
    console.log('start animating height. . .');
}

function transitionWidth(el) {
    console.log('start animating width. . .');
    el.style.width = '400px';
}

function transitionOpacity(el) {
    console.log('start animating opacity. . .');
    el.style.opacity = '0.4';
}