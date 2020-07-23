/**
 * S => State
 * T => Type
 * K => Key
 * V => Value
 * E => Element
 */

function useState<T extends number | string = string>() {
  let state: T;

  function getState() {
    return state;
  }

  function setState(newState: T) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState<number>();

newState.setState(455);
// newState.setState("455"); // Error
console.log(newState.getState());

const stateWithString = useState();
stateWithString.setState('Test');
// stateWithString.setState(123); // Error
