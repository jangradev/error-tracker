import * as React from 'react';
import { useQuery } from 'react-query';
import '../index.css';

export default function IndexQuery() {
   const labelsQuery = useQuery(['labels'], () => {
      return fetch('https://ui.dev/api/courses/react-query/labels').then(
         (res) => res.json()
      );
   });
   const labels = labelsQuery.data;
   return (
      <div>
         <h1>Labels</h1>
         {labelsQuery.isLoading && <p>Loading...</p>}
         {labelsQuery.isSuccess && (
            <ul>
               {labels.map((label) => (
                  <li key={label.id}>
                     <span style={{ color: label.color }}></span> {label.name}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}
