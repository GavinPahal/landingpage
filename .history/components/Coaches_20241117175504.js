// components/Coaches.js
import Image from "next/image";

export default function Coaches() {
  return (
    <section className="coaches">
      <h2>Meet Our Coaches</h2>
      <div className="coachCards">
        <div className="card">
          <Image
            src="/images/coach1.jpg"
            alt="Coach 1"
            width={400}
            height={300}
          />
          <h3>Coach John</h3>
          <p>Former professional player with 10+ years of coaching experience.</p>
        </div>
        <div className="card">
          <Image
            src="/images/coach2.jpg"
            alt="Coach 2"
            width={400}
            height={300}
          />
          <h3>Coach Sarah</h3>
          <p>Specializes in developing young talent and basketball fundamentals.</p>
        </div>
        <div className="card">
          <Image
            src="/images/coach3.jpg"
            alt="Coach 3"
            width={400}
            height={300}
          />
          <h3>Coach Mike</h3>
          <p>Focuses on strategy, mental toughness, and game preparation.</p>
        </div>
      </div>
    </section>
  );
}
