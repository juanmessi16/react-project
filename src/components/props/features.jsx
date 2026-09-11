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
    <section id="features" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mt-3 tracking-tight">
            FEATURES
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Fakultas Ilmu Komputer - Universitas Klabat.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {mhs.map((mahasiswa) => (
            <div 
              key={mahasiswa.id} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center
                         /* Memaksa elemen <div> di dalam Greetings agar sejajar */
                         [&_div]:flex [&_div]:flex-col [&_div]:items-center [&_div]:gap-2
                         /* Styling h1 pertama (Nama) */
                         [&_h1:first-child]:text-2xl [&_h1:first-child]:font-bold [&_h1:first-child]:text-gray-900 
                         /* Styling h1 kedua (Umur) menjadi bentuk badge */
                         [&_h1:last-child]:text-sm [&_h1:last-child]:font-medium [&_h1:last-child]:text-blue-600 [&_h1:last-child]:bg-blue-50 [&_h1:last-child]:px-4 [&_h1:last-child]:py-1 [&_h1:last-child]:rounded-full"
            >
              <Greetings 
                name={mahasiswa.nama} 
                age={mahasiswa.age} 
              />
            </div>
          ))}
        </div>

        {/* Konten grid tambahan jika ingin diisi nanti */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
           {/* Konten grid */}
        </div>

      </div>
    </section>
  );
}

export default Features;