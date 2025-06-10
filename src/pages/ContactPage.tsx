import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Mail, Phone, MapPin, Building2 } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us - AITISERVE DJAYA NARAYA';
  }, []);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-secondary/5 via-primary/5 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-4 tracking-tight drop-shadow-lg">HUBUNGI KAMI</h1>
          <p className="text-lg md:text-xl text-neutral-700 font-light max-w-2xl mx-auto">Kami siap membantu Anda. Silakan hubungi kami untuk pertanyaan, kerjasama, atau informasi lebih lanjut tentang layanan <span className="text-secondary font-semibold">AITISERVE</span>.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
          {/* Contact Info Modern Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-center border-t-8 border-secondary/80 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-secondary/10 via-primary/10 to-white/0 rounded-full blur-2xl opacity-60 pointer-events-none select-none"></div>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-secondary" />
              <span className="text-xl font-bold text-primary">PT AITISERVE DJAYA NARAYA</span>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <div className="font-semibold text-primary mb-1">Alamat</div>
                <div className="text-neutral-700 leading-relaxed">
                  Jl. Manglid, Komplek Grand Kopo Parahyangan Blok A No 20<br />Margahayu Selatan, Margahayu Kab. Bandung Jawa Barat
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <div className="font-semibold text-primary mb-1">Email</div>
                <a href="mailto:hr@aitiserve.co.id" className="text-secondary font-medium hover:underline">hr@aitiserve.co.id</a>
              </div>
            </div>
            {/* Map Embed */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261.8930972710592!2d107.56319717213829!3d-6.971631069435323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ef4d08828159%3A0xdbeef9325c283586!2sGrand%20Kopo%20Parahyangan%20blok%20B!5e0!3m2!1sen!2sid!4v1749581692040!5m2!1sen!2sid" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Lokasi AITISERVE">
          </iframe>


            </div>
          </div>

          {/* Contact Form Modern */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-primary/80">
            <h3 className="text-2xl font-bold text-primary mb-6">Kirim Pesan</h3>
            {isSuccess && (
              <div className="bg-success bg-opacity-10 text-success p-4 rounded-lg mb-6">
                Pesan Anda berhasil dikirim. Terima kasih telah menghubungi kami!
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">
                    Nama <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all ${errors.name ? 'border-error' : 'border-gray-300'}`}
                    placeholder="Nama Lengkap"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">Nama wajib diisi</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">
                    Email <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all ${errors.email ? 'border-error' : 'border-gray-300'}`}
                    placeholder="Alamat Email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">{errors.email === 'Email is required' ? 'Email wajib diisi' : 'Format email tidak valid'}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-1">
                    Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder="Nomor Telepon (opsional)"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder="Subjek Pesan (opsional)"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">
                  Pesan <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all ${errors.message ? 'border-error' : 'border-gray-300'}`}
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-error">Pesan wajib diisi</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary px-8 py-3 flex items-center rounded-full shadow-lg bg-gradient-to-r from-primary via-secondary to-primary text-white font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
