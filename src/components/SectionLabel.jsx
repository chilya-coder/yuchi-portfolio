export default function SectionLabel({ children }) {
  return (
    <p className="section-label">
      <span className="section-label-slash">/</span> {children}
    </p>
  );
}
