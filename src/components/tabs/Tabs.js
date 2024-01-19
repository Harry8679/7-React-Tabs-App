import React from 'react';
import './Tabs.scss';

const Tabs = () => {
  return (
    <section className='tabs-section --100vh'>
      <div className="container">
        <div className="tabs-heading --text-center">
            <h2 className='--line'>More About Us</h2>
            <p className='--text-sm'>Click the tab buttons to learn</p>
        </div>

        <div className="tabs --flex-start --bg-light">
            <div className="tabs-title">
                <button className='tab active-tab'>Who We Are</button>
                <button className='tab'>What We Do</button>
                <button className='tab'>Get In Touch</button>
            </div>
            <div className="tabs-content">
                <article className="content active-content">
                    <h4>Who We Are ...</h4>
                    <p>
                        Among the children of men, there is only one Lord who on Earth where we are has served you with all his heart. 
                        Advancing towards Calvary, He said, oh charity! “Here I am: I come, my Father,
                        To do your will. Let it bend to your will Mine, day after day; May I obey with joy At the orders of your love, 
                        There is not, in heaven itself, Highest bliss, Than that of a heart that loves you And who does your will.
                        I want to follow in his footsteps: Hear, O God! my desire, And from now on I do From your law all my pleasure;
                        Freed from slavery Of my false freedom, My food, my drink, Father, this is your will.
                    </p>
                </article>
                <article className="content">
                    <h4>What We Do ...</h4>
                    <p>
                        Far from the vanities of this land, there is a beautiful country Where the divine light shines, in the presence of Jesus Christ.
                        Up there, up there, one day I will go up there.
                        True happiness will be, for me, to be with Jesus my king. Storms, dark clouds, evils, wars, tears, The works of the land of darkness 
                        will flee far from my Savior. The love of God reigns there eternally and rejoices his children; It is a life of eternal spring in the 
                        presence of Emmanuel.
                    </p>
                </article>
                <article className="content">
                    <h4>Get In Touch ...</h4>
                    <p>
                        The prince of life Heals our infirmities alone; His blood purifies us, His blood purifies us Of all our iniquities.
                        Distressed, miserable, I made my torment known To the helpful friend, To the Helping Friend Who saved me from judgment.
                        To anyone who comes near, To the most unworthy of sinners, Without making any reproaches, Without making any reproaches,
                        It offers rest to the heart. So come without mistrust! You will taste its sweet peace And firm assurance, And firm assurance
                        Of perfect happiness forever.
                    </p>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Tabs;
