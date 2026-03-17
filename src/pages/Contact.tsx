export function Contact() {
  return (
    <main className="flex-1 flex flex-col items-center">
      <section className="w-full max-w-[1200px] px-6 md:px-20 py-12 md:py-20 flex flex-col items-start gap-4">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Contact Us</span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100">Let's Grow Together</h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Have questions about our agricultural technology? We're here to help you revolutionize your farming practices with smart, sustainable solutions.
        </p>
      </section>

      <div className="w-full max-w-[1200px] px-6 md:px-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8 bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-primary/5">
          <h2 className="text-2xl font-bold tracking-tight">Send us a Message</h2>
          <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</span>
                <input className="form-input rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 px-4 border" placeholder="John Doe" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</span>
                <input className="form-input rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 px-4 border" placeholder="john@example.com" type="email" />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Service of Interest</span>
              <select className="form-select rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 px-4 border">
                <option>Select a service</option>
                <option>Precision Farming</option>
                <option>De tasseling of maize</option>
                <option>Crop Monitoring</option>
                <option>Agri-Analytics</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Message</span>
              <textarea className="form-textarea rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary resize-none p-4 border" placeholder="How can we help you?" rows={4}></textarea>
            </label>
            <button className="w-full h-14 bg-primary text-slate-900 font-bold rounded-lg hover:brightness-105 transition-all shadow-lg shadow-primary/20" type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <div className="size-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone Support</h4>
                <p className="text-slate-600 dark:text-slate-400">+91 8897726897<br />Mon-Fri, 9am - 6pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Email Us</h4>
                <p className="text-slate-600 dark:text-slate-400">info@shyenaagritech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
