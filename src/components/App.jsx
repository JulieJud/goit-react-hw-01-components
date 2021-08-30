

import SocialCard from './SosialCard/SocialCard';
import Statistic from './Statistic/Statistic';
import FriendsList   from './FriendsList/FriendsList';

import user from '../upcomingDate/user.json'
import statisticData from '../upcomingDate/statisticData.json'
import friends from '../upcomingDate/friends.json'

function App () {
  return <div>
   
    <SocialCard avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
      stats={user.stats} />;
    
    <Statistic title="Upload stats" stats={statisticData} />;
    <Statistic stats={statisticData} />
    <FriendsList friends={friends} />;

  </div>;
};

export default App;
