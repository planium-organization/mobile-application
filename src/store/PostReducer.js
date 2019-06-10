const initialState = {
  posts: [
    {
      createDate: new Date(),
      supervisor: {},
      content: {
        image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    }
  ],
  selectedCard: null,
  cardsChanged: false
};

const dateToDayString = date => {
  return date.getYear().toString();
};

const reducer = (state = initialState, action) => {
  return { ...state };
};

export default reducer;
