import { useState, useEffect, FormEvent } from 'react';

export function AppointmentScheduler() {
  const [minDate, setMinDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Calculate tomorrow's date in IST
    const getTomorrowIST = () => {
      const now = new Date();
      // Convert to IST string, then parse back to a Date object
      const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      const istDate = new Date(istString);
      
      // Add 1 day
      istDate.setDate(istDate.getDate() + 1);
      
      // Format as YYYY-MM-DD for the date input
      const year = istDate.getFullYear();
      const month = String(istDate.getMonth() + 1).padStart(2, '0');
      const day = String(istDate.getDate()).padStart(2, '0');
      
      return `${year}-${month}-${day}`;
    };

    const tomorrow = getTomorrowIST();
    setMinDate(tomorrow);
    setSelectedDate(tomorrow);
  }, []);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && name && email && phone) {
      setIsSubmitting(true);
      
      try {
        await fetch("https://formsubmit.co/ajax/nagasaigeethri000@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            date: selectedDate,
            time: selectedTime,
            _subject: `New Appointment Request from ${name}`,
            _template: "table"
          })
        });
        
        setIsSubmitted(true);
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setSelectedTime('');
        
        setTimeout(() => setIsSubmitted(false), 8000);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting your appointment. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-primary/5 mt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="size-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
          <span className="material-symbols-outlined">calendar_month</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Schedule an Appointment</h2>
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
        Book a consultation with our experts. All times are in Indian Standard Time (IST).
      </p>

      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-6 rounded-xl flex items-center gap-4 border border-green-200 dark:border-green-800">
          <span className="material-symbols-outlined text-3xl">check_circle</span>
          <div>
            <h3 className="font-bold text-lg">Appointment Requested!</h3>
            <p className="text-sm">We'll confirm your meeting for {selectedDate} at {selectedTime} (IST) shortly.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name / Organization</span>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Doe / Acme Corp"
                className="form-input rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 px-4 border"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</span>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="john@example.com"
                className="form-input rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 px-4 border"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</span>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="+91 98765 43210"
                className="form-input rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 px-4 border"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Select Date (IST)</span>
              <input 
                type="date" 
                min={minDate}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
                className="form-input rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 px-4 border"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Select Time (IST)</span>
              <select 
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                className="form-select rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 px-4 border"
              >
                <option value="" disabled>Choose a time slot</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </label>
          </div>
          
          <button 
            type="submit" 
            disabled={!selectedDate || !selectedTime || !name || !email || !phone || isSubmitting}
            className="w-full h-14 bg-primary text-slate-900 font-bold rounded-lg hover:brightness-105 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                Scheduling...
              </>
            ) : (
              "Confirm Appointment"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
