const tutors = (tutors = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return tutors.map((tutor) =>
        tutor._id === action.payload._id ? action.payload : tutor
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...tutors, action.payload];
    default:
      return tutors;
  }
};

export default tutors;
