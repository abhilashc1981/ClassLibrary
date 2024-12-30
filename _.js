let _ = {
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        } 
        if (start > end) {
            const temp = end;
            end = start;
            start = temp;
        }
        const isInRange = start <= number && number < end;
        return isInRange;
    },

    words(string) {
        const words = string.split(' ');/*[];
        let currentWord = '';
        for (let i = 0; i < inputString.length; i++) {
            if (inputString[i] !== ' ') {
                currentWord += inputString[i];
            }
            else {
                arrayOfWords.push(currentWord);
                currentWord = '';
            }
        }*/
        return words;
    },

    pad(string, length) {
        const stringLength = string.length;
        if (length <= stringLength) {
            return string;
        }
        else {
            const totalPaddingToApply = length - stringLength;
            const startPaddingLength = Math.floor((totalPaddingToApply) / 2);
            const endPaddingLength = totalPaddingToApply - startPaddingLength;
            let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
            /*for (let i = 0; i < startPaddingLength; i++) {
                paddedString += ' ';
            }
            for (let i = 0; i < rightPadding; i++) {
                string.push(' ');
            }*/
            return paddedString;
        }
    },

    has(object, key) {
        const hasValue = object[key] !== undefined;
        return hasValue;
    },

    invert(object) {
        const invertedObject = {};
        for (let key in object) {
            const originalValue = object[key];
            invertedObject.originalValue = key;
        }
        return invertedObject;
    },

    findKey(object, predicate) {
        for (let key in object) {
            const value = object[key];
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
        }
        return undefined;
    },

    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        const droppedArray = array.slice(n, array.length);
        return droppedArray;
    },

    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => {return !predicate(element, index)});
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    chunk(array, size) {
        if (size === undefined) {
            size = 1;
        }
        const arrayChunks = [];
        /*const arrayLength = array.length;
        const numberOfChunks = arrayLength / size;
        
        for (let i = 0; i < numberOfChunks; i++) {
            let arrayChunk = [];
            for (let j = 0; j < size; j++) {
                arrayChunk.push(array[j])
                array.shift();
            }
            arrayChunks.push(arrayChunk);
        }*/
        for (let i = 0; i < array.length; i += size) {
            const arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    },
};




// Do not write or modify code below this line.
module.exports = _;