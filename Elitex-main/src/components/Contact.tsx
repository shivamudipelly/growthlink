import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ Name: '', Email: '', Message: '' });
  const [errors, setErrors] = useState({ Name: '', Email: '', Message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { Name: '', Email: '', Message: '' };

    if (!formData.Name.trim()) {
      newErrors.Name = 'Please enter your name.';
      valid = false;
    }
    if (!formData.Email.trim() || !validateEmail(formData.Email)) {
      newErrors.Email = 'Please enter a valid email address.';
      valid = false;
    }
    if (!formData.Message.trim()) {
      newErrors.Message = 'Please enter your message.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Begin submission: show loading spinner.
      setIsLoading(true);
      // Create a FormData object from the form element.
      const formElement = e.currentTarget;
      const data = new FormData(formElement);

      try {
        const response = await fetch('https://getform.io/f/bllyymnb', {
          method: 'POST',
          body: data,
        });
        if (response.ok) {
          setIsLoading(false);
          setIsSuccess(true);
          // Optionally clear form data.
          setFormData({ Name: '', Email: '', Message: '' });
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
        } else {
          console.error('Form submission error:', response.statusText);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Submission failed:', error);
        setIsLoading(false);
      }
    }
  };

  return (
    <section id="contact" className="md:py-20  text-white min-h-screen relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Form Section */}
          <div className="md:w-2/3 bg-gray-700 p-8 rounded-xl relative shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-full bg-gray-600 text-white border border-gray-500 placeholder-gray-300 focus:border-blue-500 focus:outline-none transition"
                />
                {errors.Name && <p className="text-red-500 text-sm mt-1">{errors.Name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-full bg-gray-600 text-white border border-gray-500 placeholder-gray-300 focus:border-blue-500 focus:outline-none transition"
                />
                {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
              </div>
              <div>
                <textarea
                  name="Message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.Message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-gray-600 text-white border border-gray-500 placeholder-gray-300 focus:border-blue-500 focus:outline-none transition"
                ></textarea>
                {errors.Message && <p className="text-red-500 text-sm mt-1">{errors.Message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-bold rounded-full transition duration-300 hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
            {/* Submission Overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-600 bg-opacity-90 rounded-xl transition-opacity duration-300">
                {/* Loading Spinner */}
                <svg
                  className="animate-spin h-16 w-16 text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                <p className="mt-4 text-white text-xl font-semibold">Sending Mail...</p>
              </div>
            )}
            {isSuccess && !isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-600 bg-opacity-90 rounded-xl transition-opacity duration-300">
                {/* Success Checkmark */}
                <svg
                  className="h-16 w-16 text-white animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="mt-4 text-white text-xl font-semibold">Message Sent Successful!</p>
              </div>
            )}
          </div>
          {/* Contact Info Section */}
          <div className="md:w-1/3 flex flex-col justify-center items-center space-y-6">
            <p className="text-lg flex items-center space-x-3">
              <i className="fa-solid fa-paper-plane text-2xl"></i>
              <a href="mailto:shivamudipally12@gmail.com" className="hover:text-blue-400 transition">
                shivamudipally12@gmail.com
              </a>
            </p>
            <p className="text-lg flex items-center space-x-3">
              <i className="fa-solid fa-phone text-2xl"></i>
              <a
                href="https://wa.me/917013017106"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                +91 7013017106
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mudipellyshiva/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-10 h-10 rounded-full transition-transform hover:scale-110"
                />
              </a>
              <a href="https://www.hackerrank.com/profile/shivamudipelly" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
                  alt="HackerRank"
                  className="w-10 h-10 rounded-full transition-transform hover:scale-110"
                />
              </a>
              <a href="https://leetcode.com/shivamudipelly" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="w-10 h-10 rounded-full transition-transform hover:scale-110"
                />
              </a>
              <a href="https://linkedin.com/in/shivamudipelly" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  className="w-10 h-10 rounded-full transition-transform hover:scale-110"
                />
              </a>
              <a href="https://github.com/shivamudipelly" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub"
                  className="w-10 h-10 rounded-full bg-white transition-transform hover:scale-110"
                />
              </a>
            </div>
            <a
              href="https://example.com/Shiva_Resume.pdf"
              download="Shiva.pdf"
              className="mt-4 inline-block bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
