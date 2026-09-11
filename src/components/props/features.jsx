import Greetings from './Greetings'; // Pastikan path file benar

const mhs = [
  {
    id: 1,
    nama: "Juan",
    age: 19,
  },
  {
    id: 2,
    nama: "Messi",
    age: 19,
  },


  
];

function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Features</h2>

          {mhs.map((mahasiswa) => (
            <Greetings key={mahasiswa.id} name={mahasiswa.nama} age={mahasiswa.age}></Greetings>
          ))}
          
          <p className="mt-3 text-gray-600">
            Universitas Klabat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
           {/* Konten grid */}
        </div>

      </div>
    </section>
  );
}

export default Features;