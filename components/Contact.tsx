'use client';

import { motion } from 'framer-motion';
import contactData from '@/data/contact.json';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

export default function Contact() {
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    alert(`${type} copied to clipboard!`);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Contact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <FaPhone className="text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(contactData.phone, 'Phone number')}
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Copy phone number"
              >
                Copy
              </button>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <FaEnvelope className="text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-gray-300 hover:text-accent transition-colors break-all"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(contactData.email, 'Email')}
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Copy email"
              >
                Copy
              </button>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all md:col-span-2"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <FaMapMarkerAlt className="text-accent" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-gray-300">{contactData.location}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href={contactData.resume}
            download
            className="inline-flex items-center gap-3 bg-accent text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/80 transition-all hover:scale-105"
          >
            <FaDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

