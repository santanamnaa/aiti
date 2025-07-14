import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, Building2 } from 'lucide-react';

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
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi';
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
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[615px] flex items-center justify-center overflow-x-hidden px-4 sm:px-6 md:px-10 pt-32">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img src="/images/figma/contact-bg.png" alt="bg" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
          <div className="font-poppins text-[64px] md:text-[96px] font-medium text-white drop-shadow-lg leading-none tracking-tight mb-4">
            CONNECT WITH
          </div>
          <div className="font-poppins text-[64px] md:text-[96px] font-semibold text-[#08C2C1] drop-shadow-lg leading-none tracking-tight mb-8">
            OUR EXPERT
          </div>
          <div className="text-white text-lg font-light mb-8">Let us know how we can help.</div>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="relative w-full bg-gray-100 overflow-x-hidden py-16 px-4 sm:px-6 md:px-10">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 justify-center items-start">
            {/* Contact Information Card */}
            <div className="bg-[rgba(8,194,193,0.05)] rounded-2xl p-10 w-full max-w-lg backdrop-blur-md shadow-lg border border-[#08C2C1]/10 flex flex-col gap-8 opacity-100">
              <div className="font-poppins text-[32px] md:text-[40px] font-medium text-[#7E7E7E] leading-none tracking-tight mb-2">
                CONTACT <span className="font-semibold text-[#08C2C1]">INFORMATION</span>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <div className="text-[#7E7E7E] font-medium text-lg mb-1 flex items-center gap-2"><Building2 className="w-6 h-6 text-[#08C2C1]" /> Perusahaan</div>
                  <div className="text-[#0E1423] font-semibold text-xl">PT AITISERVE DJAYA NARAYA</div>
                </div>
                <div>
                  <div className="text-[#7E7E7E] font-medium text-lg mb-1 flex items-center gap-2"><MapPin className="w-6 h-6 text-[#08C2C1]" /> Alamat</div>
                  <div className="text-[#0E1423] font-medium">Jl. Manglid, Komplek Grand Kopo Parahyangan Blok A No 20<br/>Margahayu Selatan, Margahayu Kab. Bandung Jawa Barat</div>
                </div>
                <div>
                  <div className="text-[#7E7E7E] font-medium text-lg mb-1 flex items-center gap-2"><Mail className="w-6 h-6 text-[#08C2C1]" /> Email</div>
                  <a href="mailto:hr@aitiserve.co.id" className="text-[#0E1423] font-medium hover:underline">hr@aitiserve.co.id</a>
                </div>
                <div>
                  <div className="text-[#7E7E7E] font-medium text-lg mb-1 flex items-center gap-2"><Phone className="w-6 h-6 text-[#08C2C1]" /> Telepon</div>
                  <div className="text-[#0E1423] font-medium">+62 812-3456-7890</div>
                </div>
              </div>
            </div>
            {/* Contact Form Card */}
            <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg border-t-8 border-[#08C2C1]/80">
              <div className="font-poppins text-[40px] font-medium text-[#7E7E7E] leading-none tracking-tight mb-8 text-center md:text-left">
                GET IN <span className="font-semibold text-[#08C2C1]">TOUCH</span>
              </div>
              {isSuccess && (
                <div className="bg-[#08C2C1]/10 text-[#08C2C1] p-4 rounded-lg mb-6 text-center font-medium">
                  Pesan Anda berhasil dikirim. Terima kasih telah menghubungi kami!
                </div>
              )}
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#7E7E7E] mb-1">
                      Nama <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#08C2C1] focus:border-[#08C2C1] outline-none transition-all text-lg ${errors.name ? 'border-[#E53935]' : 'border-gray-300'}`}
                      placeholder="Nama Lengkap"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-[#E53935]">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#7E7E7E] mb-1">
                      Email <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#08C2C1] focus:border-[#08C2C1] outline-none transition-all text-lg ${errors.email ? 'border-[#E53935]' : 'border-gray-300'}`}
                      placeholder="Alamat Email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-[#E53935]">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#7E7E7E] mb-1">
                      Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08C2C1] focus:border-[#08C2C1] outline-none transition-all text-lg"
                      placeholder="Nomor Telepon (opsional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#7E7E7E] mb-1">
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08C2C1] focus:border-[#08C2C1] outline-none transition-all text-lg"
                      placeholder="Subjek Pesan (opsional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#7E7E7E] mb-1">
                      Pesan <span className="text-[#E53935]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#08C2C1] focus:border-[#08C2C1] outline-none transition-all text-lg ${errors.message ? 'border-[#E53935]' : 'border-gray-300'}`}
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-[#E53935]">{errors.message}</p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn px-8 py-3 flex items-center justify-center rounded-lg shadow-lg bg-[#08C2C1] text-white font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 gap-2"
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
    </>
  );
};

export default ContactPage;
