// thin woven border strip, inspired by tibeb edges. keep it to a few places
export default function Woven({ tone = "light", className = "" }) {
  return <div className={`woven woven-${tone} ${className}`} aria-hidden="true" />;
}
