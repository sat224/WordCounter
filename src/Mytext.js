import Form from 'react-bootstrap/Form';


function Mytext({mytext, text_update, char_update, word_update}) {


    function update_text(event){
        var x=event.target.value
        var char_count=x.length
        // console.log(char_count)
        var word_count=x.split(" ").length
        // console.log(word_count)
        text_update(x)
        // console.log(mytext)
        word_update(word_count)
        char_update(char_count)
    }
  return (
    <Form.Control
          as="textarea"
          placeholder="Enter your text here"
          style={{ 
            height: '300px',
            marginTop:10,
        }}
        onChange={ update_text }
        value= { mytext }

    />
  );
}

export default Mytext;

