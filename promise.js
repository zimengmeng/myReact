class MyPromise {
    constructor(props) {
        props(this._reslove.bind(this), thid.reject.bind(this))

    }
    _reslove(reslove) {
        this._success(reslove)
    }
    _reject(resject) {
        this._err(resject)
    }
    then(success, err) {
        this._success = success;
        this._err = err;
    }

}

new MyPromise((reslove, reject) => {
    setTimeout(() => {
        let num = Math.random();
        reslove(num)
    }, 2000);
}).then((num) => {
    console.log(num)
})