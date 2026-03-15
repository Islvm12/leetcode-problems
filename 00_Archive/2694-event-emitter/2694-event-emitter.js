class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */

    constructor(){
        this.subs={}
    }
    
    subscribe(eventName, callback) {
        this.subs[eventName] ? "" : this.subs[eventName] = []
        this.subs[eventName].push(callback)
        return {
            unsubscribe: () => {
               this.subs[eventName] = this.subs[eventName].filter(cb=> cb!==callback)
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
       return this.subs[eventName] ? this.subs[eventName].map((cb)=>cb(...args)) : []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */