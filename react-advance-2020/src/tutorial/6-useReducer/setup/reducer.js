// Reducer Function
export const reducer = (state, action) => {
  //   console.log(state);
  if (action.type === "ITEM_ADDED") {
    const newPeople = [...state.people, action.payload]; // yesma user lay haleko values dakhau na lai gareko ho
    return {
      ...state, // purano value load hoss yesma ra naya vaue add garna sajio hoss baneko xa yesma
      people: newPeople, // yesma mathi address gareko value rakheko ho
      isModelOpen: true, // value rakhesi message dakhau baneko ho
      modalContent: "Item Added", // message ma tei item yo dakhau baneko ho
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModelOpen: true, modalContent: "The Field is empty" }; // yedi field ma kei xaina vani yo message dakhau baneko ho
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModelOpen: false }; // error or success message dakhai yesi ismodle lai banda garako xa yesma
  }
  //   yesma value remove gareko xa
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModelOpen: true,
      modalContent: "Item has been Removed",
    };
  }
  // return state;
  throw new Error("No item were added");
};
