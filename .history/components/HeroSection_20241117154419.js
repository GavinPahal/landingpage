import Heading from './Heading';
import Button from './Button';

export default function HeroSection() {
  return (
    <section>
      <Heading>Welcome to the Landing Page</Heading>
      <Button text="Get Started" onClick={() => alert('Button Clicked')} />
    </section>
  );
}
