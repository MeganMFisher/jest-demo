const func = require('./functions');


describe('Number Methods:', function() {

    test('returnNumber() should return num parameter', function() {
        expect(func.returnNumber(1)).toEqual(1);
    })
    
    test('multiply() should return two parameters multiplied together', function() {
        expect(func.multiply(2,3)).toEqual(6);
    })

})


describe('Other:', function() {

    test('returnString() should return "Nancy"', function() {
        expect(func.returnString('Nancy')).toBe("Nancy");
    })
    
    
    test('concatStrings() should concat the two parameters', function() {
        expect(func.concatStrings('Megan', 'Fisher')).toEqual('Hello, Megan Fisher')
    })
    
    test('checkLength() should return the length of the array', function() {
        expect(func.checkLength([1,3,4])).toEqual(3);
    })


})

describe('Swapi stuff:', function(){
    test('getLuke() should return "Luke Skywalker"', function(done) {
        
        function callback(res) {
            expect(res.data.name).toEqual('Luke Skywalker')
            done();
        }
        
        func.getLuke(callback);

    })
})