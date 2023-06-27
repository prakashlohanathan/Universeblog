import React from "react";
import Card from './components/Card';
import Contact from './components/contact';

function App() {
  return (
    <div>


<video className="video-background" autoPlay muted loop>
<source src="https://player.vimeo.com/external/314181352.sd.mp4?s=d2cd7a37f6250cd543e6d13209730b4bcf242130&profile_id=164&oauth2_token_id=57447761" />
    </video>
      
      <h1 className="heading">My Universe</h1>
      {Contact.map((contactinfo) => (
          <Card
            key={contactinfo.id}
            name={contactinfo.name}
            img={contactinfo.imgURL}
            tel={contactinfo.phone}
            email={contactinfo.email}
          />
        ))}
      </div>
    
  );
}
      

export default App;


//         <Card
//         name={Contact[0].name}
//         img={Contact[0].imgURL}
//         tel={Contact[0].phone}
//         email={Contact[0].email}
//       />
//       <Card
//         name={Contact[1].name}
//         img={Contact[1].imgURL}
//         tel={Contact[1].phone}
//         email={Contact[1].email}
//       />
//       <Card
//         name={Contact[2].name}
//         img={Contact[2].imgURL}
//         tel={Contact[2].phone}
//         email={Contact[2].email}
        
//       />
//     </div>
//   );
// }

