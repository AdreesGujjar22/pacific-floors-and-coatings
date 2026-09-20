import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function QuoteForm({ heading = "Reach out for a Free Quote!" }: { heading?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-xs text-slate-900 placeholder:text-slate-500 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25 transition-colors";

  return (
    <div className="panel border-border bg-gradient-to-br from-[#fffdf8] to-[#f0eadc] p-5 text-slate-900 shadow-[0_22px_60px_-20px_rgba(0,0,0,0.85)] sm:p-7">
      <h2 className="text-xl font-black tracking-tight text-[#302355]">{heading}</h2>
      {sent ? (
        <div className="mt-4 rounded-xl border border-border bg-primary/10 p-4">
          <p className="text-sm font-medium text-slate-900">
            Thanks! Your request was received.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            We usually reply within one business day.
          </p>
        </div>
      ) : (
        <form className="mt-5 grid gap-x-3 gap-y-4 sm:grid-cols-2" onSubmit={onSubmit}>
          <div>
            <label className="eyebrow" htmlFor="qf-name">Name</label>
            <input id="qf-name" name="name" required placeholder="Your name" className={`mt-1 ${field}`} />
          </div>
          <div>
            <label className="eyebrow" htmlFor="qf-phone">Phone</label>
            <input id="qf-phone" name="phone" type="tel" required placeholder="(236) 555-0123" className={`mt-1 ${field}`} />
          </div>
          <div>
            <label className="eyebrow" htmlFor="qf-email">Email</label>
            <input id="qf-email" name="email" type="email" required placeholder="you@email.com" className={`mt-1 ${field}`} />
          </div>
          <div>
            <label className="eyebrow" htmlFor="qf-service">Service type</label>
            <div className="relative mt-1">
              <select id="qf-service" name="service" className={`appearance-none pr-10 ${field}`} defaultValue="">
                <option value="" disabled>Select service type</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
                <option value="other">Something else</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
            </div>
          </div>
          <p className="sm:col-span-2 text-[9px] leading-relaxed text-slate-600">
            By submitting this form you agree that Pacific Floors and Coatings may contact you by phone, text or email
            about your request. Consent is not a condition of purchase.
          </p>
          <Button
            type="submit"
            className="sm:col-span-2 h-auto py-3.5 text-xs font-bold uppercase tracking-wider"
          >
            Get My Free Quote
          </Button>
        </form>
      )}
    </div>
  );
}
