import { selectAuth } from '@picarro-common-ui/picarro-login-data-access';
import { UserManagement } from '@picarro-common-ui/user-management-ui-mui';
import { useSelector } from 'react-redux';
import '../styles.css';
export const UserManagmentContainer = () => {
  const { currentUser } = useSelector(selectAuth);

  //dont show the usermanagement if the currentUser token is empty.
  //this is a sample example showing how to use the userManagment component.
  return currentUser ? <UserManagement /> : <div>Waiting for user login</div>;
};
