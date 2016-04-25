describe('Bubble Sort', function(){
  it('handles an empty array blah blah', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('should return itself if length is one', function(){
  	expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('correctly sorts',function(){
  	expect( bubbleSort([3,5,7,9,1])).toEqual([1,3,5,7,9]);
  });
  // it('stops the function early if it\'s sorted' ,function(){
  // 	expect( bubbleSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  // }); 

});