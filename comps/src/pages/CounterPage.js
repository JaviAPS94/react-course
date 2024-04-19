import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from 'immer';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const ADD = 'add';


const reducer = (state, action) => {
    // JUST USING REACT
    // switch (action.type) {
    //     case INCREMENT_COUNT:
    //         return { ...state, count: state.count + 1 };
    //     case DECREMENT_COUNT:
    //         return { ...state, count: state.count - 1 };
    //     case CHANGE_VALUE_TO_ADD:
    //         return { ...state, valueToAdd: action.payload };
    //     case ADD:
    //         return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    //     default:
    //         return state;
    // }

    //IMMER
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count += 1;
            return;
        case DECREMENT_COUNT:
            state.count -= 1;
            return;
        case CHANGE_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        case ADD:
            state.count += state.valueToAdd;
            state.valueToAdd = 0;
            return;
        default:
            return;
    }
}

function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        // setCount(count + 1);
        dispatch({ type: INCREMENT_COUNT });
    }

    const decrement = () => {
        // setCount(count - 1);
        dispatch({ type: DECREMENT_COUNT });
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
        dispatch({ type: CHANGE_VALUE_TO_ADD, payload: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
        dispatch({ type: ADD });
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Counter is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;