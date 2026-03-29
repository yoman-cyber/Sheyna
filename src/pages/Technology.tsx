export function Technology() {
  return (
    <main className="flex-grow">
      <section className="px-6 md:px-20 py-12">
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-end p-8 md:p-16">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbdjNB8Pn_LvQ72ZGnX5ZYaP0mHBIeqlE2ZQpW-vYl99LcuAGy6ISN-PO6hJJMuTYykQLzAYjrsYYPQVjev-emZ-E6EpnTNVadDVjGMyynTAw0DN_sQvqBaLKxpgqdFtLmNLpC73FqUTVohdUSq9kf_fdHzvm_fzBPlOa9VkJTMWpvP4kZBPnI2f0g8IqzbM5EDJb0QdVALAn0k_a5VvUQAMhMPz9jUIU-awh2PvZ9OIvo0bkXbRNobaCp4kSpneXibTLpa2IiqaEy')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent"></div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">Innovation Report 2024</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Technology & Innovation</h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              SHYENA AGRI-TECH leverages cutting-edge sensors, machine learning, and precision engineering to transform traditional farming into a data-driven science. Our commitment to accuracy ensures every seed and drop of water is used to its maximum potential.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="material-symbols-outlined">center_focus_strong</span>
            <span className="font-bold text-sm uppercase tracking-wider">Analysis Engine</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Advanced Image Analysis</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Our proprietary spectral imaging algorithms detect plant stress long before it's visible to the human eye. By analyzing thousands of high-resolution images captured by our drone fleet, we identify nutrient deficiencies, pest infestations, and irrigation inconsistencies with high accuracy.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span>Multispectral vegetation indexing (NDVI, NDRE)</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span>AI-powered pest and disease identification</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span>Real-time canopy coverage monitoring</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <img alt="Data visualization dashboard" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOZz9Z_F8DmBhbjYcSC2FilTqAh6P_C_7yldyd0iZ99GmL11HhDLYBrPN43haqGqfHR8i4BpFGz_qvhwiIJHWbDY13kNBvxL4sCGSBbBfDaB9JE9D51Nhf5Xw8resM-Za3_8hhC3Q1Gf-OJBbRFBj8dzG0O8CqHmpMs6DViD9Js6t-ZUWTFSKIVHB3UYBPqRwAAXt-HqgJvXv-lWsit8tuSgE_fYPukIZBT-vqOZCyhGyKzPIvUoQd9KgrfYQZJs-5pdFd9Pbg3O6D" />
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 bg-slate-50 dark:bg-background-dark/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-2 text-primary mb-4">
            <span className="material-symbols-outlined">precision_manufacturing</span>
            <span className="font-bold text-sm uppercase tracking-wider">The Hardware</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision Agri-Tech Tools</h2>
          <p className="text-slate-600 dark:text-slate-400">Engineering excellence in every sensor and actuator we deploy in the field.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
            <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">sensors</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Sub-surface Sensors</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">LoRaWAN enabled soil probes measuring moisture, temperature, and NPK levels at three depths simultaneously.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
            <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">fmd_good</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Variable Rate Flow</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Automated nozzle systems that adjust chemical and water delivery millisecond-by-millisecond based on GPS position.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
            <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">flight_takeoff</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Autonomous Fleets</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Swarm-capable UAVs with collision avoidance and 40-minute flight endurance for large-scale field mapping.</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-24">
        <div className="bg-slate-900 rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-stretch border border-slate-800">
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Data-Driven Decision Making</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Turning raw data into actionable intelligence. Our "Agri-Mind" dashboard integrates satellite imagery, ground sensors, and weather forecasts to provide farmers with a clear roadmap for the season ahead.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-bold text-white">Proven</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Yield Increase</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-bold text-white">Significant</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Water Saved</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-bold text-white">Substantial</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Less Input Cost</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-bold text-white">Real-time</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Alert System</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[300px]">
            <img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC55vapbn7Q17BheNgbF49V1n-GFqj8qpj4p0Hir1mxUcx9Q8h6xCnYJpREp_fgvO6_s4KU0xgdqZeraDEdFXVprzilODmpnZPj8pPNsbXyTOKosCFOgqAvxdrvJeSaHtzu_Yiu-EBQghCbOJWrj3pYJ76FMIYVGc0EOfbdL-svDpt7YsegsneFvRWHtvItL7kqt5M7NbnfzZBB1BfZ-U0Sg6nHi8T_QX1JG7ZWzNnAyqQ-aYnzrWhX6HaaRydCM2888079OJrhQ6Vu" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 text-center">
        <h3 className="text-2xl font-bold mb-8">Trusted by Modern Growers Worldwide</h3>
        <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 dark:invert">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">AGRISYSTEMS</div>
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">ECOGROW</div>
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">SOLARFARMS</div>
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">PURECROP</div>
        </div>
      </section>
    </main>
  );
}
