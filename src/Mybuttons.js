import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Mybuttons({mytext, text_update, char_update, word_update}) {
  function convert_lowercase(){
    var x= mytext 
    var y = x.toLowerCase()
    console.log(y)
    text_update(y)
  }

  function convert_uppercase(){
    var x= mytext 
    var y = x.toUpperCase()
    console.log(y)
    text_update(y)
  }

  function clear_text(){
    char_update("")
    word_update("")
    text_update("")
    console.log("Clearing the text")
  }

  return (
    
    <ButtonGroup aria-label="Basic example">
      <Button onClick={ convert_lowercase } variant="primary">To LowerCase</Button>
      <Button onClick={ convert_uppercase } variant="warning">To UpperCase</Button>
      <Button onClick={ clear_text } variant="danger">Reset</Button>
    </ButtonGroup>
  );
}

export default Mybuttons;
