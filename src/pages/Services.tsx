import { Link } from 'react-router-dom';

export function Services() {
  return (
    <main className="flex-1">
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpqpEczBKBcRdGI3fhfh_hzWEa5aif-cMjU-v13B63tynCQXTVZ57t6rZoyuAUx6d0p8Xn9OxGVrn50schvYX8MSE6qixs-j_Vc_kWXv7YF0jw6kxlGTkNsQUEZZTprE1pspjMgBwX7xyv3OyfwITz1jN5SOkCGQpNSsKcQR1QyL_-BnJv17cI_n-bhCsopnAdV9_DV4iVqO3-9674EatUoU8QEBpZzwQmATmOnjB2jpK7nAllTTyeOYS-SZcNcsyJejhHW9YiLk9K')" }}></div>
        <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          <h1 className="max-w-3xl text-4xl font-black text-white md:text-6xl">Precision Agriculture Services</h1>
          <p className="mt-4 max-w-xl text-lg text-slate-200">Revolutionizing farming through precision, timing, and advanced analytics for maximum productivity and genetic purity.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="space-y-32">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                Genetic Purity
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">AI-based Tassel Detection</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Our automated detasseling service ensures unmatched hybrid seed purity for Maize by combining cutting-edge drones and AI with real-time field data.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Centimeter-Level Accuracy:</strong> Achieve maximum detasseling across entire fields with centimeter-level accuracy using a user-friendly application for plucking, eliminating human error, and ensuring consistent hybrid seed quality.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>AI-Powered Real-Time Detection:</strong> Our AI model intelligently distinguishes tassels from foliage in real-time, adapting to varying crop conditions for highly reliable results.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Drone-Enabled Scalability:</strong> High-efficiency drone operations cover vast acreage quickly, reducing labor dependence while maintaining consistent hybrid seed purity.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{ backgroundImage: "url('/maize-field.jpg')" }}></div>
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                <span className="material-symbols-outlined text-sm">analytics</span>
                Quality Consistency
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">Tea Plantation Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>High-Precision Aerial Mapping:</strong> Generate accurate block-, division-, and estate-level digital maps for better planning, monitoring, and resource allocation across plantations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Data-Driven Fertiliser Optimisation:</strong> Multispectral imagery analyzes plant health and nutrient needs, reducing input costs while ensuring consistent, high-quality yield.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>AI-Based Flush Density Detection:</strong> Identify harvesting readiness and leaf density in real-time, enabling smarter labour deployment and improved picking efficiency.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIftVhj1v8wC8HSJW8YaQKFuVQoYWdsWBLr3qno_7uc5ZYjMJW_YEhm51Xs_YW2fR5Fq3OALyIUmsCZUrm27x07J5RpagVdHKOZBooCrlFhrXKDz7Us0xQ20d_UO7Pxa9ySvSAETis1-lHU22V9YYCUFZYeSKO8yuPALDJ2Fj4exTbqRplbjKUTQ0M038YG8I0uxmgSGxWp_iY9Apod0MJDLk-dc1B1am6rsWuv03wd0BK51g9t6ggLHyVrXc8ZfAfcZhE1lJ0GZyk')" }}></div>
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                <span className="material-symbols-outlined text-sm">schedule</span>
                Digital Transformation
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">Oil Palm Management Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Digital Tree Inventory Auditing:</strong> Build a precise, geo-tagged database of every palm tree and farm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Targeted Fertiliser Optimisation:</strong> Use aerial and AI-driven insights to apply nutrients tree-by-tree, reducing wastage while maximizing productivity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Structured Health Monitoring:</strong> Proactive quarterly or bi-annual digital health records enable year-on-year comparison, improving operational insights and management efficiency.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{ backgroundImage: "url('/oil-palm.jpg')" }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 dark:bg-primary/10 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-5xl">Increased Yield & Efficiency</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">The Shyena advantage is measured in tangible results for your bottom line.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-primary/10">
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Yield Increase</h3>
              <p className="text-slate-600 dark:text-slate-400">By hitting precise biological windows, our clients see significant improvements in total harvestable volume.</p>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-primary/10">
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable Farming</h3>
              <p className="text-slate-600 dark:text-slate-400">Reduced chemical usage and optimized resource allocation lead to a lower environmental footprint.</p>
            </div>
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-primary/10">
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cost Reduction</h3>
              <p className="text-slate-600 dark:text-slate-400">Automated workflows reduce manual labor requirements and operational overhead significantly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #45cf17 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to optimize your harvest?</h2>
            <p className="mt-4 text-slate-300">Join the precision agriculture revolution today with SHYENA AGRI-TECH.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="rounded-lg bg-primary px-8 py-4 text-lg font-bold text-slate-900 hover:bg-primary/90 transition-all">Schedule a Demo</Link>
              <Link to="/contact" className="rounded-lg border border-white/20 px-8 py-4 text-lg font-bold hover:bg-white/10 transition-all">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
