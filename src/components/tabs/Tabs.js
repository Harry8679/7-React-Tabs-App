import React from 'react';
import './Tabs.scss';

const Tabs = () => {
  return (
    <section className='tabs-section'>
      <div className="container">
        <div className="tabs-heading">
            <h2>More About Us</h2>
            <p>Click the tab buttons to learn</p>
        </div>

        <div className="tabs">
            <div className="tabs-title">
                <button className='tab'>Who We Are</button>
                <button className='tab'>What We Do</button>
                <button className='tab'>Get In Touch</button>
            </div>
            <div className="tabs-content">
                <article className="content">
                    <h4>Who We Are ...</h4>
                    <p>
                        Among the children of men, there is only one Lord who on Earth where we are has served you with all his heart. 
                        Advancing towards Calvary, He said, oh charity! “Here I am: I come, my Father,
                        To do your will.
                    </p>
                </article>
                <article className="content">
                    <h4>What We Do ...</h4>
                    <p>
                        Let it bend to your will Mine, day after day; May I obey with joy At the orders of your love, There is not, in heaven itself,
                        Highest bliss, Than that of a heart that loves you And who does your will.
                    </p>
                </article>
                <article className="content">
                    <h4>Get In Touch ...</h4>
                    <p>
                        I want to follow in his footsteps: Hear, O God! my desire, And from now on I do From your law all my pleasure;
                        Freed from slavery Of my false freedom, My food, my drink, Father, this is your will.
                    </p>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Tabs;
