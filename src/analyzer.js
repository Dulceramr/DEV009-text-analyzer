const analyzer = {  
  getWordCount: (text) => {
    const WiOuStaEndSp = text.trim();
    const splitText = WiOuStaEndSp.split(/\s+/);
    const wordCount = splitText.length;
    return wordCount
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
  },
  getCharacterCount: (text) => {
    const WiOuStaEndSp = text.trim();
    const characterCount = WiOuStaEndSp.length;
    return characterCount;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const charactPunt = text.replace (/[.,]/g, "")
    const characterExSp = charactPunt.replace (/\s/g, "");
    const charaCountExSp = characterExSp.length;
    return charaCountExSp;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {   
    const withoutStartEndSpaces = text.trim(); //quitar orillas 
    const splitText = withoutStartEndSpaces.split(/\s+/); //dividir palabras en un array 
    const wordCount = splitText.length; // sacar el numero de palabras (n elem en el array)*
    const characterExSp = withoutStartEndSpaces.replace(/\s+/g, "");   //quitar espacios a la cadena  que le quite las orillas 
    const suma = characterExSp.length //numero de letras de todas las palabras sin espacios
    const promedio = suma / wordCount // sacar el promedio dividiendo el n de letras total entre el numero de palabras
    return (parseFloat((promedio.toFixed(2))));
    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const withoutStartEndSpaces = text.trim(); 
    const splitText = withoutStartEndSpaces.split(" "); //dividir palabras en un array
    let numeros = 0;
    for(let i = 0; i<splitText.length; i++){
      if(!isNaN(Number(splitText[i]))){       //si es un numero 
        numeros++;
        
      }}
    return numeros;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  
  getNumberSum: (text) => {
    const withoutStartEndSpaces = text.trim(); 
    const splitText = withoutStartEndSpaces.split(/\s+/); //dividir palabras en un array
    let total = 0;
    for(let i = 0; i<(splitText.length); i++){
      if (!isNaN(Number(splitText[i]))){
        total += Number(splitText[i]);
      } else {
        total += 0; 
      }

    }
    return total 
  }
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

};


export default analyzer;
