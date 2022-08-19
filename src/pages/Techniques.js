import { useState, useEffect } from "react";

import TechniquesLayout from "../components/techniques/TechniquesLayout";

function TechniquesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTechniques, setLoadedTechniques] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-project-59273-default-rtdb.firebaseio.com//techniques.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const techniques = [];

        for (const key in data) {
          const technique = {
            id: key,
            ...data[key],
          };

          techniques.push(technique);
        }

        setIsLoading(false);
        setLoadedTechniques(techniques.reverse());
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <TechniquesLayout techniques={loadedTechniques} />
    </div>
  );
}

export default TechniquesPage;
