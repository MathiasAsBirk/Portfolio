export default function Section({ alt=false, children }) {
  return (
    <section className={`section ${alt ? "section--alt": ""}`}>
      <div className="container">{children}</div>
    </section>
  );
}
