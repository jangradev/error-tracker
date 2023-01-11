import IssuesList from '../components/IssuesList';
import LabelList from '../components/LabelList';
import * as React from 'react';

export default function Issues() {
   const [labelsArray, setLabelsArray] = React.useState([]);
   //console.log(labelsArray);
   return (
      <div>
         <main>
            <section>
               <h1>Issues</h1>
               <IssuesList labels={labelsArray} />
            </section>
            <aside>
               <LabelList
                  selected={labelsArray}
                  toggle={(clickedLabel) => {
                     // console.log(clickedLabel);
                     setLabelsArray((currentLabels) =>
                        currentLabels.includes(clickedLabel)
                           ? currentLabels.filter(
                                (currentLabel) => currentLabel !== clickedLabel
                             )
                           : currentLabels.concat(clickedLabel)
                     );
                  }}
               />
            </aside>
         </main>
      </div>
   );
}
