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
              <h2 className="text-3xl font-bold md:text-4xl">Detasseling Process</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Our automated detasseling service ensures unmatched seed quality by combining cutting-edge robotics with real-time field data.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Centimeter-Level Accuracy:</strong> Precise removal of tassels to prevent self-pollination.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Optimal Timing:</strong> AI-driven scheduling to hit the narrow 48-hour window for maximum genetic purity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Minimal Crop Damage:</strong> Non-invasive sensors ensure the surrounding foliage remains untouched.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQMkxNs5g8K33j0nXUsZ4to0njf3NxCC3TXvrOPW46kBJl_D9lTRyb64QteZyvwKVCmspE-Gv_OjFPTlIQKVeKXHRXyinKJXF-IVHZHXWX6X0n9V8wga37UH3QMvgW4_j3GWgWkAz8mC5XkKcyhmo7eVooFL79-MNxxnqksiS3cS3A75ClvfwWxZi7xci5d8LayTH-CG7JRKNLaXwn1SMHwJcvuyFm8HOO6TfC_f3m_o3KdIkjhq93MVd32TZJKx9Fy0hDjQLNYvTb')" }}></div>
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                <span className="material-symbols-outlined text-sm">analytics</span>
                Quality Grading
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">Tea Flush Bud Analysis</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Leverage multispectral imaging to identify the perfect stage for tea leaf harvesting. We transform visual data into actionable picking schedules.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Bud Maturity Mapping:</strong> Real-time identification of "two leaves and a bud" for premium grading.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Yield Forecasting:</strong> Precise estimates of harvest volume to optimize processing plant operations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Health Monitoring:</strong> Early detection of pests and nutrient deficiencies across vast plantations.</span>
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
                Peak Maturity
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">On-Time Harvesting</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Synchronized logistics and peak maturity monitoring to ensure your crops reach the market at their highest value.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Real-time Logistics:</strong> Coordination of machinery and transport based on hourly crop maturity updates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Post-Harvest Quality:</strong> Reduced transit times to preserve freshness and nutritional value.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span><strong>Waste Minimization:</strong> Eliminate over-ripening or premature picking through data-backed decisions.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGnhGF-XWa4FgFMbPT6AC3egtA66zYRDG8JOjRTLtLjeeRSEYO-ZnNYO336VaOK3td-0sLIQOEoqKZmafOJzUOOwOLQhMNcZCQ8NvQP-wGiqJuaahp9IKnNgeiPoRctsxRYEY9W8vHFiWIyNV7QniKCXu7T6fvUK6goakUWGlwTQOHejNkw3s4r_--8wxOqX89g98cqq1_6fBZY9Gb_epf0CQQdZ2p1xrQB5GBaRBIvDy2Hrr-9-fUreVBSi-xNY9Ijb2_eoZ0yU5-')" }}></div>
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
              <h3 className="text-xl font-bold mb-3">25% Yield Increase</h3>
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
              <p className="text-slate-600 dark:text-slate-400">Automated workflows reduce manual labor requirements and operational overhead by up to 40%.</p>
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
              <button className="rounded-lg bg-primary px-8 py-4 text-lg font-bold text-slate-900 hover:bg-primary/90 transition-all">Schedule a Demo</button>
              <button className="rounded-lg border border-white/20 px-8 py-4 text-lg font-bold hover:bg-white/10 transition-all">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
