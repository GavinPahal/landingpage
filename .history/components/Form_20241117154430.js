import Input from './Input';
import Button from './Button';

export default function Form() {
  return (
    <form>
      <Input type="text" placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Button text="Submit" onClick={(e) => e.preventDefault()} />
    </form>
  );
}
