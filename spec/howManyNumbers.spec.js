const findAll = require("../lib/howManyNumbers");

// describe("Example Tests", function(){
//     it("Simple Cases", function(){
//       Test.assertSimilar(findAll(10, 3), [8, '118', '334']);
//       Test.assertSimilar(findAll(27, 3), [1, '999', '999']);
//       Test.assertSimilar(findAll(84, 4), []);
//       Test.assertSimilar(findAll(35, 6), [123, '116999', '566666']) 
//     });
//   });
  


    describe('find numbers that add to desired', () => {

        // it('should return empty', () => {
        // let result = findAll(84, 4);
        // expect(result).toEqual([]);
        // });
        
        it('should return empty', () => {
        let result = findAll(10, 3);
        expect(result).toEqual([8, '118', '334']);
        });
            



        
    
        
    });