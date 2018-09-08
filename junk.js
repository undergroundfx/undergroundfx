function translate(str) {

  var piglatin = str.toLowerCase().split('');
  var firstletter = piglatin[0];
  var firstgroup = '';
	var letter = '';

  if ("aeiou".indexOf(firstletter) !== -1) {

    piglatin.push('way');
		str = piglatin.join('');
		return str;
 
	} else { 
		
			for(var i=0;i<piglatin.length;i++) {     					
					letter = piglatin[i];
					console.log(letter);

					//if vowel is not found this pass
					if("aeiou".indexOf(letter) === -1) {

					firstgroup += letter;
					var sliced = piglatin.slice(firstgroup.length);
					str = sliced.join('');
					console.log(str);
					str = str + firstgroup + 'ay';					
					}	else {

					return str;
					}	
			}
	}
 return str;
}

console.log(translate("glove"));
