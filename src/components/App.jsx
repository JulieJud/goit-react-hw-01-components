
import 'App.css';
import SocialCard  from './SosialCard/SocialCard';
import user from '../date/user.json'

 const App = () => {
  return <div>
     <SocialCard
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
  </div>;
};

export default App;
