import { useState } from "react";
import portfolio from "../data/portfolio";

const whatsappNumber = portfolio.phone.replace(/\D/g, "");

const mapSrc =
  "https://www.google.com/maps?q=Hargeisa,Somaliland&z=12&output=embed";

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const MailIcon = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);
const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </Icon>
);
const PinIcon = () => (
  <Icon>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);
const GithubIcon = () => (
  <Icon>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </Icon>
);
const ChatIcon = () => (
  <Icon>
    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l1.9-5.4A8.4 8.4 0 1 1 21 11.5Z" />
  </Icon>
);
const ClockIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n---\nName: ${form.name}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  };

  const cards = [
    {
      icon: <MailIcon />,
      label: "Email",
      value: portfolio.email,
      href: `mailto:${portfolio.email}`,
    },
    {
      icon: <PhoneIcon />,
      label: "Phone",
      value: portfolio.phone,
      href: `tel:${whatsappNumber ? "+" + whatsappNumber : ""}`,
    },
    {
      icon: <PinIcon />,
      label: "Location",
      value: portfolio.location,
      href: "https://www.google.com/maps?q=Hargeisa,Somaliland",
    },
    {
      icon: <GithubIcon />,
      label: "GitHub",
      value: "fatimahasan774-a11y",
      href: portfolio.github,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__head">
          <p className="contact__badge">
            <span className="contact__dot" /> Available for work and collaboration
          </p>
          <h2>Let's build something together</h2>
          <p className="contact__lead">
            Do you have a project, an internship or an idea you want to bring to
            life? Send me a message and I will reply as soon as I can.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <ul className="contact__cards">
              {cards.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noreferrer" className="contact__card">
                    <span className="contact__icon">{c.icon}</span>
                    <span>
                      <small>{c.label}</small>
                      <strong>{c.value}</strong>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="contact__hours">
              <span className="contact__icon contact__icon--sm"><ClockIcon /></span>
              <div>
                <strong>Working hours</strong>
                <p>Saturday to Thursday, 8:00 AM to 6:00 PM (East Africa Time)</p>
              </div>
            </div>

            <a
              className="btn btn--whatsapp"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              <ChatIcon /> Chat on WhatsApp
            </a>
          </div>

          <form className="contact__form" onSubmit={send}>
            <h3>Send me a message</h3>
            <div className="contact__row">
              <label>
                Your name
                <input name="name" value={form.name} onChange={update} placeholder="Your full name" required />
              </label>
              <label>
                Your email
                <input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required />
              </label>
            </div>
            <label>
              Subject
              <input name="subject" value={form.subject} onChange={update} placeholder="What is this about?" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Tell me about your project or idea..." required />
            </label>
            <button type="submit" className="btn btn--sky contact__submit">Send message</button>
            <p className="contact__note">This opens your email app with the message ready to send.</p>
          </form>
        </div>

        <div className="contact__map">
          <iframe
            title="Map of Hargeisa, Somaliland"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}