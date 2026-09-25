// wraps a value from data/church.js. if it's still a [placeholder] it gets marked
export default function Val({ children }) {
  const isPh = typeof children === "string" && children.startsWith("[");
  if (!isPh) return children;
  return (
    <span className="ph" title="Placeholder: replace in data/church.js">
      {children}
    </span>
  );
}
