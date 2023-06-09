import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Mybuttons from "./Mybuttons";
import Cards from "./Cards";
import Mytext from "./Mytext";
import Myfooter from "./Myfooter";

function App() {
  const [mytext, text_update] = useState("");
  const [c_count, char_update] = useState("");
  const [w_count, word_update] = useState("");
  return (
    <div>
      <Container
        style={{
          marginTop: 20,
          textAlign: "center",
        }}
      >
        <Alert variant="success">
          <Alert.Heading>Word Counter</Alert.Heading>
        </Alert>

        <Cards mytext={mytext} c_count={c_count} w_count={w_count} />
        <Mybuttons
          mytext={mytext}
          text_update={text_update}
          char_update={char_update}
          word_update={word_update}
        />
        <Mytext
          mytext={mytext}
          text_update={text_update}
          char_update={char_update}
          word_update={word_update}
        />
      </Container>
      <div>
        <Myfooter />
      </div>
    </div>
  );
}

export default App;
