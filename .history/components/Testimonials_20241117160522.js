export default function Testimonials() {
    const testimonials = [
      { name: 'John Doe', feedback: 'This app changed my life!', image: '/testimonial1.jpg' },
      { name: 'Jane Smith', feedback: 'I love how easy it is to use.', image: '/testimonial2.jpg' },
      { name: 'Chris Johnson', feedback: 'Reliable and efficient every time.', image: '/testimonial3.jpg' },
    ];
  
    return (
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial">
            <img src={t.image} alt={t.name} className="testimonial-image" />
            <p>"{t.feedback}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </section>
    );
  }
  