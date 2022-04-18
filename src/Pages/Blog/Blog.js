import React from 'react';

const Blog = () => {
    return (
      <div>
          <h2 className='text-primary'>Questions and Answers(3)</h2>
          <br />
        <h3 className="text-primary">
          Q:Difference between Authrization and Authentication
        </h3>
        <p>
          Authorization is giving permissions to the users to use the role.In
          otherwords giving some one previlage of doing anywork.For example
          giving admin access to a user to write over the system is an
          authrization. Authentication is also a part of ensuring system
          security,to ensure that unauthorized persons will not enter to the
          system.Checking with proper credentials ensure the authentication.{" "}
        </p>

        <h3 className="text-primary">Q:Why are you using firebase?</h3>
        <p>
          Firebase is a platform of developing mobile and webapps.Firebase is
          developed by google and it has a high quality security system.In
          useing authentication firebase provides us most secure platform of
          storing user indformations. It's authenication systema and database is
          most secure amoung the third party applications.Other authentication providers are Auth0,Okta, ActiveDictionary etc.
        </p>
        <h3 className="text-primary">Q:Some other features of firebase.</h3>
        <p>Firebase provides user authentications.Also it has website hosting,database,Cloud Storage,Firebase Machine Leaning etc.It also provides feature of Mobile app development SDK.</p>
      </div>
    );
};

export default Blog;