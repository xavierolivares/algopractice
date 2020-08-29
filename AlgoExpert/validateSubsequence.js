function isValidSubsequence(array, sequence) {
    // Write your code here.
      
      // store the sequence in an object along with position
      // keep a counter of how many numbers match
      let counter = 0;
      let position = 0;
      let sequenceObj = {};
      
      for (const num of sequence) {
          console.log('num', num);
          console.log('counter', counter);
          sequenceObj[counter] = num;
          counter++;
      }
      console.log(sequenceObj);
      
      for (let i = 0; i < array.length; i++) {
          let arrNum = array[i];
          if (sequenceObj[position] === arrNum) {
              position++;
          }
      }
      
      if (counter === position) {
          return true;
      } else {
          return false;
      }
  }

  /* second solution */
  
  function isValidSubsequence(array, sequence) {
    // Write your code here.
      
      // let counter = 0;
      let position = 0;
  // 	let sequenceObj = {};
      
  // 	for (const num of sequence) {
  // 		console.log('num', num);
  // 		console.log('counter', counter);
  // 		sequenceObj[counter] = num;
  // 		counter++;
  // 	}
  // 	console.log(sequenceObj);
      
      for (let i = 0; i < array.length; i++) {
          let arrNum = array[i];
          if (sequence[position] === arrNum) {
              position++;
          }
      }
      
      if (sequence.length === position) {
          return true;
      } else {
          return false;
      }
  }
  