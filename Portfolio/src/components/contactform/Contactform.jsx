import { useState } from "react";
import styles from "./contactform.module.css";

export default function Contactform(){
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = e => { e.preventDefault(); console.log(form); alert("Thanks!"); setForm({name:"",email:"",message:""}); };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input name="name" placeholder="Name" value={form.name} onChange={onChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
      <textarea name="message" rows="6" placeholder="Message" value={form.message} onChange={onChange} required />
      <button className="btn btn--primary" type="submit">Send</button>
    </form>
  );
}
