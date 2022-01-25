import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";
// import { data } from "../../../data";

// // Reducer Function
// const reducer = (state, action) => {
//   console.log(state);
//   if (action.type === "ITEM_ADDED") {
//     const newPeople = [...state.people, action.payload];
//     return {
//       ...state,
//       people: newPeople,
//       isModelOpen: true,
//       modalContent: "Item Added",
//     };
//   }
//   if (action.type === "NO_VALUE") {
//     return { ...state, isModelOpen: true, modalContent: "The Field is empty" };
//   }
//   if (action.type === "CLOSE_MODAL") {
//     return { ...state, isModelOpen: false };
//   }
//   if (action.type === "REMOVE_ITEM") {
//     const newPeople = state.people.filter(
//       (person) => person.id !== action.payload
//     );
//     return {
//       ...state,
//       people: newPeople,
//       isModelOpen: true,
//       modalContent: "Item has been Removed",
//     };
//   }
//   // return state;
//   throw new Error("No item were added");
// };
// hami lai k k chaixa value haru defaultState ma rakheko xam
const defaultState = {
  people: [],
  isModelOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState(""); // name banera useState usegareko ho ra empty value pass gareko ho
  const [state, dispatch] = useReducer(reducer, defaultState); // yesma hami lay sabai reducer use garda 2 ta value pathau nu parxa - state ra dispatch ani function bitra sadai (reducer, defaultState -> k k value add garne yesma banere)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name }; // yesma hami lay name yedi input text ma text xa vani tyo value tei newPeple ma add gareko xam
      dispatch({ type: "ITEM_ADDED", payload: newPeople }); // aaba tyo value lai add garna lai hami lay dispatch ko help bata reducer ma rakheko xam
      setName(""); // add garesi field empty gareko xam
    } else {
      dispatch({ type: "NO_VALUE" }); // yei xaina vani error yo message dakhau baneko xam
    }
  };
  // yo message aayesi 3 sec paxi yo hunu paryo vanna lai gareko ho
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {/* yesma hami layy check gareko xam yedi ismodalopen true xa ra modal ma tei value xa vani aauw banera */}
      {state.isModelOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // yesma hami lay setName ma value rakheko xam
          />
        </div>
        <button type="submit" className="btn">
          {" "}
          add
        </button>
      </form>
      {state.people.map((people) => {
        return (
          <div key={people.id} className="item">
            <h4>{people.name}</h4>
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: people.id })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
