// DogFact Component
export const DogFact = (props) => {
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop

  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return <div className="dogfact">
    {props.fact}
  </div>;
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
