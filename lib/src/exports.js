(function (root, factory) {
    if ('function' === typeof define && define.amd) {
        define(factory);
    }
    else if ('object' == typeof exports) {
        module.exports['brokenspork'] = factory();
    }
    else {
        root['brokenspork'] = factory();
    }
})(this, function () { return brokenspork; });
