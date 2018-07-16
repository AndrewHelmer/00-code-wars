function capitalize(s){
  joe = s.split('').map((letter,index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('');
  steve = s.split('').map((letter,index) => index % 2 !== 0 ? letter.toUpperCase() : letter).join('');
    return [joe,steve];
  };