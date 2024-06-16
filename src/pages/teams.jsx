import Layout from '../app/layout';

export default function TeamsPage() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Our Team</h2>
          <p className="mt-4 text-center">Meet our dedicated team members.</p>
          {/* Fetch and display data from Randomuser.me */}
        </div>
      </section>
    </Layout>
  );
}



// import { useEffect, useState } from 'react';

// export default function Teams() {
//   const [team, setTeam] = useState([]);

//   useEffect(() => {
//     fetch('https://randomuser.me/api/?results=6')
//       .then(response => response.json())
//       .then(data => setTeam(data.results));
//   }, []);

//   return (
//     <section className="container mx-auto py-12">
//       <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {team.map((member, index) => (
//           <div key={index} className="bg-white p-6 shadow-md">
//             <img src={member.picture.large} alt={`${member.name.first} ${member.name.last}`} className="w-full h-auto rounded-full" />
//             <h3 className="text-xl font-bold mt-4">{`${member.name.first} ${member.name.last}`}</h3>
//             <p>{member.email}</p>
//             <p>{member.cell}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
