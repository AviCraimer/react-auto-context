// Tracks how many times contexts are being consumed.

//Context consumers add one when they are mounted, and subtract one when they are unmounted.

const activeConsumers = {}

// example {
// MyContext: 3  //This indicates that there are 3 consumers of myContext
// }

export const consumerTracker = function (contextName,  addRemove ) { //(String, Bool) -> Number
    let num =  (activeConsumers[contextName]) ? activeConsumers[contextName] : 0;
    if (addRemove) {num += 1}
    else {num -= 1}
    activeConsumers[contextName] = num;
    return num;
}