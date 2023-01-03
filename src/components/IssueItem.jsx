import { Link } from 'react-router-dom';
import { GoIssueOpened, GoIssueClosed, GoComment } from 'react-icons/go';
import { relativeDate } from '../helpers/relativeDate';
import { useUserData } from '../helpers/useUserData';

export function IssueItem({
   title,
   number,
   assignee,
   commentCount,
   createdBy,
   createdDate,
   labels,
   status,
}) {
   const assigneeUser = useUserData(assignee);
   const createdByUser = useUserData(createdBy);
   console.log('created by', createdByUser.data);
   console.log('assignee', assigneeUser.data);

   return (
      <li>
         <div>
            {status === 'done' || status === 'cancelled' ? (
               <GoIssueClosed style={{ color: 'red' }} />
            ) : (
               <GoIssueOpened style={{ color: 'green' }} />
            )}
         </div>
         <div className='issue-content'>
            <span>
               <Link to={`/issue/${number}`}>{title}</Link>
               {labels.map((label) => (
                  <span key={label} className={`label red`}>
                     {label}
                  </span>
               ))}
            </span>
            <small>
               #{number} opened {relativeDate(createdDate)} by{' '}
               {createdByUser.isSuccess
                  ? ` created by ${createdByUser.data.name}`
                  : ''}
            </small>
         </div>
         {assignee ? (
            <img
               className='assigned-to'
               src={
                  assigneeUser.isSuccess
                     ? assigneeUser.data.profilePictureUrl
                     : ''
               }
               alt={`Assigneed to ${
                  assigneeUser.isSuccess ? assigneeUser.data.name : 'avatar'
               }`}
            />
         ) : null}
         <span className='comment-count'>
            {commentCount > 0 ? (
               <>
                  <GoComment />
                  {commentCount}
               </>
            ) : null}
         </span>
      </li>
   );
}
