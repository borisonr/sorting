describe('Split', function(){
  it('handles an empty array blah blah', function(){
    expect( split([]) ).toEqual( [] );
  });
   it('should return itself if length is one', function(){
  	expect( split([1]) ).toEqual( [1] );
  });
    it('should divide an (even-length) array equally', function(){
  	expect( split([1,2]) ).toEqual( [[1],[2]] );
  });

});

describe('Merge', function(){
  it('handles two empty arrays blah blah', function(){
    expect( merge([],[]) ).toEqual( [] );
  });
   it('merges arrays of length one correctly', function(){
  	expect( merge([1],[2]) ).toEqual( [1, 2] );
  	expect( merge([2],[1]) ).toEqual( [1, 2] );
  });
    it('merges arrays of greater than length one correctly', function(){
  	expect( merge([1, 5],[2, 3]) ).toEqual( [1, 2, 3, 5] );
  	expect( merge([2, 3, 4, 7],[1, 5, 7, 9]) ).toEqual( [1, 2, 3, 4, 5, 7, 7, 9] );
  });
});


describe('Merge Sort', function(){
  it('handles an empty array blah blah', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('calls the split and merge functions', function() {
      spyOn(window, 'mergeSort').and.callThrough();
      mergeSort([1,5,7,3,9,4]);
      expect(split.calls.count()).toEqual(1);
      expect(merge.calls.count()).toEqual(1);
    });

});