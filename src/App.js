import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from './actions';

//ReactStrap && FontAwesome
import { Button, ButtonGroup, Container } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Container>
        <h1 className="display-3">Counter: {counter} </h1>
        <div className="mx-auto">
          <ButtonGroup className="mx-auto">
            <Button
              color="success"
              size="lg"
              onClick={() => dispatch(increment(1))}
            >
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </Button>

            <Button color="info" size="lg" onClick={() => dispatch(reset())}>
              <FontAwesomeIcon icon={faRedo}></FontAwesomeIcon>
            </Button>

            <Button
              color="danger"
              size="lg"
              onClick={() => dispatch(decrement(1))}
            >
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </Button>
          </ButtonGroup>
        </div>

        {isLogged ? <h3>Hello!</h3> : null}
      </Container>
    </div>
  );
};

export default App;
