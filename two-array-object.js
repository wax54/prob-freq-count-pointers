// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    return keys.reduce((res, key, i) => {
        const val = i < vals.length ? vals[i] : null;
        res[key] = val;
        return res;
    }, {});    
}
