import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main className="flex-1">
      <section className="relative px-6 py-16 lg:px-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 z-10">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">Future of Farming</span>
              <h1 className="text-slate-900 dark:text-slate-100 text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                Revolutionizing Agriculture with <span className="text-primary">Precision Tech</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg lg:text-xl max-w-xl leading-relaxed">
                Specializing in detasseling, tea flush bud analysis, and optimized harvesting solutions to maximize your field's potential.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-primary/20">
                Get Started Today
              </Link>
              <Link to="/services" className="border-2 border-primary/20 hover:border-primary/40 dark:text-slate-100 px-8 py-4 rounded-xl text-base font-bold transition-all">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/3] bg-cover bg-center rounded-2xl shadow-2xl border-4 border-white/10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPjmPFlv8HhcJ64nl0M75P0GX5-hvGxL_3EEs2BJZ3AVQ-p3vSMxa3XgQrlZEmLSTpj3C9rjw1Mm9ajejDNdlmb71ETtyYOr8pEtpSjrY9nXtsgTrXav8TGuBzVQoRdOnUem2wgsjMHvirdrqLgaZoIiTLg4Xh_6uCVFRwwW7xUAzn6g3bOd16NPRb7lg4uu71qy8rvSH83kawZAIYt2Y1Y3Wn2aWmyxrYGdWVcqVkA76D4DVrTLZUFKafC_DacO6Rx-Nj32GaI1Mr')" }}>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl hidden sm:flex items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-lg text-primary">
                <span className="material-symbols-outlined text-3xl">insights</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">Proven</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Yield Increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/50 dark:bg-background-dark/50 py-24 px-6 lg:px-20" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Our Expertise</h2>
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-slate-100">Precision Solutions for Modern Challenges</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-1">
              We leverage cutting-edge AI and aerial imaging to bring clarity and efficiency to your agricultural operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-background-light dark:bg-slate-800/40 p-8 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">AI-based Tassel Detection</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                High-precision automated systems for seed corn production, ensuring genetic purity with minimal manual labor through real-time detection.
              </p>
              <Link to="/services" className="text-primary font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="group bg-background-light dark:bg-slate-800/40 p-8 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">analytics</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">Tea Plantation Services</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Advanced multi-spectral imaging and AI-based flush density detection to identify optimal tea plucking windows and maximize leaf quality.
              </p>
              <Link to="/services" className="text-primary font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="group bg-background-light dark:bg-slate-800/40 p-8 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">schedule</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">Oil Palm Management</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Digital tree inventory auditing and targeted fertiliser optimisation to reduce wastage and maximize productivity.
              </p>
              <Link to="/services" className="text-primary font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20 overflow-hidden" id="why-us">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/maize-field.jpg')" }}></div>
                  <div className="h-48 rounded-2xl bg-primary flex flex-col justify-end p-6">
                    <p className="text-background-dark font-black text-3xl">High</p>
                    <p className="text-background-dark/80 text-sm font-bold">Accuracy Rate</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-48 rounded-2xl bg-slate-800 flex flex-col justify-end p-6">
                    <p className="text-white font-black text-3xl">15k+</p>
                    <p className="text-white/60 text-sm font-bold">Acres Analyzed</p>
                  </div>
                  <div className="h-64 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/oil-palm.jpg')" }}></div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Why Choose Us</h2>
                <h3 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-slate-100">Where Innovation Meets the Field</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  We don't just provide data; we provide actionable insights that transform how you manage your land, leading to sustainable growth.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">rocket_launch</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-slate-100">Cutting-Edge Innovation</h5>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Pioneering AI-driven algorithms tailored for specific crop genetics.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-slate-100">Operational Efficiency</h5>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Reducing input costs through targeted resource allocation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-slate-100">Yield Optimization</h5>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Data-driven harvesting windows to ensure maximum crop value.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/50 dark:bg-background-dark/50 py-24 px-6 lg:px-20" id="case-studies">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Success Stories</h2>
            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-slate-100">Impactful Case Studies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/5 hover:border-primary/20 transition-all shadow-sm hover:shadow-xl">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/maize-field.jpg')" }}></div>
              <div className="p-8">
                <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 block">Genetic Purity</span>
                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">AI-based Tassel Detection</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our automated detasseling service ensures unmatched hybrid seed purity for Maize by combining cutting-edge drones and AI with real-time field data.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/5 hover:border-primary/20 transition-all shadow-sm hover:shadow-xl">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838686-37ed7a928b04?auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="p-8">
                <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 block">Premium Tea Estates</span>
                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">Tea Quality Enhancement</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Improved bud maturity matching for a premium estate, resulting in a substantial increase in high-grade leaf exports.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/5 hover:border-primary/20 transition-all shadow-sm hover:shadow-xl">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/oil-palm.jpg')" }}></div>
              <div className="p-8">
                <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 block">Oil Palm Management</span>
                <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">Efficiency Gain</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Reduction in labor costs and optimized resource allocation through digital tree inventory auditing and targeted fertiliser optimisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto rounded-3xl bg-slate-900 dark:bg-slate-800 p-8 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <h2 className="text-white text-4xl lg:text-6xl font-black max-w-3xl leading-tight">
              Ready to Elevate Your Agricultural Strategy?
            </h2>
            <p className="text-slate-300 text-lg lg:text-xl max-w-2xl leading-relaxed">
              Join dozens of forward-thinking farms using SHYENA AGRI-TECH to drive results. Book your personalized technical consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <Link to="/contact" className="bg-primary hover:bg-primary/90 text-background-dark px-10 py-5 rounded-2xl text-lg font-bold transition-all">
                Book Free Consultation
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all border border-white/10 backdrop-blur-md">
                Speak with an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
