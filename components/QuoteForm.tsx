"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icons";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle"|"sending"|"error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const endpoint = "https://formsubmit.co/ajax/info@sundirect.ca";
    setStatus("sending");
    try {
      const formData = new FormData(form);
      formData.set("_subject", "New Sun Direct solar assessment");
      formData.set("_template", "table");
      const response = await fetch(endpoint, { method: "POST", body: formData, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error();
      window.location.href = "/thank-you/";
    } catch { setStatus("error"); }
  }
  return <form className={`quote-form ${compact ? "compact" : ""}`} onSubmit={submit} noValidate={false}>
    <input type="hidden" name="_subject" value="New Sun Direct solar assessment" />
    <input type="hidden" name="_template" value="table" />
    <div className="form-heading"><span className="form-icon"><Icon name="sun"/></span><div><p>Solar assessment</p><h2>Tell us about your energy use</h2></div></div>
    <div className="form-grid">
      <label><span className="field-label">Full name</span><input name="name" autoComplete="name" required /></label>
      <label><span className="field-label">Email</span><input name="email" type="email" autoComplete="email" required /></label>
      <label><span className="field-label">Phone</span><input name="phone" type="tel" autoComplete="tel" required /></label>
      <label><span className="field-label">Property address</span><input name="address" autoComplete="street-address" required /></label>
      <label><span className="field-label">Property type <em>Optional</em></span><select name="propertyType" defaultValue=""><option value="">Select a property type</option><option>Single Family Detached</option><option>Townhouse / Semi-Detached</option><option>Mobile / Manufactured Home</option><option>Commercial Property</option><option>Farm / Rural Acreage</option></select></label>
      <label><span className="field-label">Average monthly electricity cost <em>Optional</em></span><select name="bill" defaultValue=""><option value="">Select a range</option><option>Under $150</option><option>$150-$300</option><option>$301-$750</option><option>$751-$2,000</option><option>Over $2,000</option><option>Not sure</option></select></label>
    </div>
    {!compact && <><div className="form-grid form-grid-secondary"><label><span className="field-label">Annual electricity usage <em>Optional</em></span><input name="annualKwh" inputMode="numeric" aria-describedby="usage-help"/><small id="usage-help">Enter annual kWh if it appears on your bill.</small></label><label><span className="field-label">Preferred installation <em>Optional</em></span><select name="mount" defaultValue=""><option value="">Select a preference</option><option>Not sure yet</option><option>Rooftop</option><option>Ground-mounted</option><option>Open to either option</option></select><small>Choose “Not sure yet” if you would like us to compare options.</small></label></div><label><span className="field-label">Additional notes <em>Optional</em></span><textarea name="message" rows={4}/></label><label className="file-field"><Icon name="upload"/><span><b>Electricity bill (optional)</b><small>PDF, JPG or PNG. Documents are sent only through the configured secure form provider.</small></span><input name="billUpload" type="file" accept=".pdf,.jpg,.jpeg,.png" /></label></>}
    <label className="consent"><input type="checkbox" name="consent" required /><span>I consent to Sun Direct Renewable using this information to respond to my proposal request. I understand that production, savings and eligibility require property-specific review.</span></label>
    <button className="button submit-button" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Get My Solar Proposal"}<Icon name="arrow"/></button>
    {status === "error" && <p className="form-message error" role="alert">We could not send your request. Please try again after the contact endpoint is confirmed.</p>}
    <p className="form-fineprint">Your assessment is sent to info@sundirect.ca and used only to review and respond to this request.</p>
  </form>;
}
