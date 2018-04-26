var em = {};
em.register = {};

em.listen = function  (eventName, listener) {
    var listeners = em.register[eventName];
    if (listeners) {
        listeners.push(listener);
        return;
    }
    listeners = [];
    listeners.push(listener);
    em.register[eventName] = listeners;
};

em.fire = function  (eventName, data) {
    var listeners = em.register[eventName];
    if (listeners) {
        listeners.forEach(function  (listener) {
            listener(data);
        });
    }
};
