export default function Testimonials() {
    const testimonials = [
      { name: 'John Doe', feedback: 'This app changed my life!' },
      { name: 'Jane Smith', feedback: 'I love how easy it is to use.' },
      { name: 'Chris Johnson', feedback: 'Reliable and efficient every time.' },
    ];
  
    return (
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial">
            <p>"{t.feedback}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </section>
    );
  }
  