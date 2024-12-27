import React from "react";

const EventLocation: React.FC = () => {
  return (
    <section id="event-location" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Event Location</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join us at the venue for an unforgettable experience! Find the exact location below.
        </p>

        {/* Google Maps Embed */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731892482322!3d40.75889883440776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1701436024884!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Event Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EventLocation;

