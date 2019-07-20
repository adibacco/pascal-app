import { Injectable } from '@angular/core';
 
 @Injectable()
 export class PyramidService {
   
    fact = (num) => {
    	return (num <= 1 ? num : num * this.fact(num - 1));
    }
    
    binomialCoeff = (n, k) => {
    	return Math.round(this.fact(n) / ( this.fact(k) * this.fact( n - k ) ));
    }
    
    calc = (row) => {
      var res : number[];
      
      if (row <= 0) return [1];
      if (row == 1) return [1, 1];
      
      res = [ 1 ];

      for (var i = 1; i < row; i++){
      	res.push(this.binomialCoeff(row, i));
      }
      res.push(1);
      
      return res;
    }
    
    getPyramid = (size) => {
      var pyramid = [];
      for (var i = 0; i < size; i++){
        pyramid.push(this.calc(i));
      }
	  
	  console.log(pyramid);
      return pyramid; 
    }
    
 }
