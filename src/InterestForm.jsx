import { useState } from 'react';

export default function InterestForm({ product, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [freeTime, setFreeTime] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      location.trim() === '' ||
      freeTime.trim() === '' ||
      message.trim() === ''
    ) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setSubmitted(true);

    console.log('Form submitted for:', product.name, {
      name,
      email,
      phone,
      location,
      freeTime,
      message,
    });
  };

  if (submitted) {
    return (
      <div className="mt-3 text-center">
        <p className="text-success">Thank you! Your interest has been sent.</p>
        <button className="btn btn-secondary" onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <div className="interest-form-container">
      <form onSubmit={handleSubmit} className="mt-3">
        <h5>Contact Poster About: {product.name}</h5>

        {error && <p className="text-danger">{error}</p>}

        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Dorm/Apartment Address"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <input
            className="form-control"
            placeholder="Available Times"
            value={freeTime}
            onChange={(e) => setFreeTime(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message to the poster"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="d-flex gap-2 mt-3">
          <button type="submit" className="btn btn-cardinal">
            Send Interest
          </button>
          <button className="btn btn-secondary" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
