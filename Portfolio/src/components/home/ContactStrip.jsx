import MotionFade from "../primitives/MotionFade";

export default function ContactStrip(){
  return (
    <MotionFade>
      <div style={{
        border:'1px solid var(--border)', borderRadius:14, padding:18,
        display:'flex', gap:12, alignItems:'center', justifyContent:'space-between',
        background:'rgba(255,255,255,.02)'
      }}>
        <div>
          <h3>Let’s build something</h3>
          <p style={{margin:0, color:'var(--muted)'}}>Based in Viborg — available for freelance or full-time.</p>
        </div>
        <a className="btn btn--primary" href="/contact">Get in touch</a>
      </div>
    </MotionFade>
  );
}
