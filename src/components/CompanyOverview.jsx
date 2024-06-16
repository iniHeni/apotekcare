import { useState, useEffect } from "react";

export default function CompanyOverview() {
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();
        const teamData = data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          position: "Team Member",
          image: user.picture.large,
        }));
        setTeam(teamData);
      } catch (error) {
        setError("Failed to load team data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-16 p-4 space-y-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Tentang ApotekCare</h2>
        <p className="text-lg text-gray-800 mb-8">
          ApotekCare adalah apotek modern yang berdiri sejak tahun 2000 dengan tujuan utama untuk menyediakan layanan kesehatan terbaik dan produk berkualitas tinggi. Kami berkomitmen untuk meningkatkan kesejahteraan masyarakat dengan memberikan akses mudah ke obat-obatan dan suplemen yang terpercaya.
        </p>
      </div>
      
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Sejarah Kami</h3>
          <p className="text-gray-800">
            Sejak didirikan, ApotekCare telah berkembang pesat dan menjadi salah satu apotek terkemuka di Indonesia. Kami memulai dengan satu toko kecil dan kini telah memiliki lebih dari 50 cabang di seluruh negeri. Keberhasilan kami didukung oleh tim profesional yang berdedikasi untuk memberikan layanan terbaik kepada pelanggan.
          </p>
        </div>

        <div className="border-t border-gray-300"></div>

        <div className="text-center">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Budaya Kami</h3>
          <p className="text-gray-800">
            Di ApotekCare, kami percaya bahwa budaya perusahaan yang positif adalah kunci untuk memberikan layanan terbaik kepada pelanggan. Kami mengedepankan nilai-nilai seperti integritas, profesionalisme, dan kepedulian dalam setiap aspek pekerjaan kami. Tim kami terdiri dari individu-individu yang berdedikasi dan berkomitmen untuk mencapai visi dan misi perusahaan.
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-3xl font-semibold text-blue-600 mb-8">Tim Kami</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center w-60">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-bold text-blue-600">{member.name}</h4>
                <p className="text-gray-800">{member.position}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
