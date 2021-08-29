

import SocialCard from './SosialCard/SocialCard';
import Statistic from './Statistic/Statistic';

import user from '../upcomingDate/user.json'
import statisticData from '../upcomingDate/statisticData.json'

function App () {
  return <div>
   
    <SocialCard avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
      stats={user.stats} />
    
   <Statistic title="Upload stats" stats={statisticData} />;

  </div>;
};

export default App;
