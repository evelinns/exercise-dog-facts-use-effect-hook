// Import required  hooks
import { useState, useEffect } from 'react';
import { DogFact } from "./components/DogFact";

export const App = () => {

  const [dogFact, setDogFact] = useState();
  const [updatedogfact, setUpdatedogfact] = useState(0);
  const dogApi = "https://dogapi.dog/api/v2/facts";

  useEffect(() => {
    fetch(dogApi)
      .then(res => res.json())
      .then(json => setDogFact(json.data[0].attributes.body))
  }, [updatedogfact])

  return (

    <div className="App">
      {dogFact && <DogFact fact={dogFact} />}
      <button onClick={() => setUpdatedogfact(prev => prev + 1)}>Update Fact</button>
    </div>
  );
};
