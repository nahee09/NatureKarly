import { useState, useLayoutEffect } from 'react'; 

export function useReadDocs(collectionKey) {
  const collectionRef = collection(db, collectionKey);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useLayoutEffect(() => {
    async function fetchData() {
      try {
        const { docs } = await getDocs(collectionRef);
        const docsData = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(docsData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { isLoading, error, data };
}