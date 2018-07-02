var array = [4, 2, 8.1, 4, 5, 0, 8]
function arrayMax(arr) {
    
    max = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}