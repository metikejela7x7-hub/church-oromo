"use client";
import { useEffect, useState } from "react";
import { church, nav } from "@/data/church";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  let cls = "site-header";
  if (scrolled) cls += " solid";
  if (open) cls += " menu-open";

  return (
    <header className={cls}>
      <a className="skip" href="#main">Skip to content</a>
      <div className="wrap header-row">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-short">{church.short}</span>
          <span className="brand-long">{church.name}</span>
        </a>

        <nav aria-label="Main" className="desk-nav">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#visit" className="btn btn-gold header-cta">Plan your visit</a>

        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="menu-lines" aria-hidden="true" />
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-menu" className={"mobile-menu" + (open ? " open" : "")} inert={!open}>
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu-foot">
          <a href="#visit" className="btn btn-gold" onClick={() => setOpen(false)}>Plan your visit</a>
          <p lang="om" className="mobile-welcome">{church.welcomeOromo}</p>
        </div>
      </div>
    </header>
  );
}
