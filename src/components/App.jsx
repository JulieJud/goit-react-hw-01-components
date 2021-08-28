
import 'App.css';
import { SocialCard } from './SosialCard/SocialCard';
import user from '../date/user.json'

export const App = () => {
  return <div>
    <SocialCard user={user} />
  </div>;
};


