import { useState } from "react";
import Navbar from "../components/Navbar";
import NavRoutes from "../components/NavRoutes";
import Footer from "../components/Footer";
import { BsClockHistory, BsTools, BsPersonCheck, BsGeoAlt, BsGeoAltFill, BsFillTelephoneFill, BsEnvelopeFill, BsSend } from "react-icons/bs";

    const ContactPage = ({ darkMode, setDarkMode }) => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({
        access_key: "839ec9f9-24d9-44ee-ada3-c4b556967966",
        subject: `Nuevo contacto web: ${formData.asunto}`,
        from_name: formData.nombre,
        replyto: formData.email,
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        asunto: formData.asunto,
        mensaje: formData.mensaje,
        }),
    });

    const result = await response.json();
    if (result.success) {
        alert("¡Gracias por tu mensaje! Tu consulta ha sido enviada a ventas@induwork.cl");
        setFormData({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
    } else {
        alert("Hubo un problema al enviar el correo. Por favor intentalo nuevamente.");
    }
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#efefef] text-black transition-colors dark:bg-zinc-950 dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="pt-[80px]">
            <NavRoutes />
        </div>

        <section className="w-full px-6 md:px-[60px] mb-12">
            <div className="relative h-[220px] sm:h-[280px] w-full overflow-hidden rounded-lg shadow-md">
                <img
                src="/images/banners/Contacto.jpg" 
                alt="Soporte Técnico Induwork"
                className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center px-8 sm:px-12 text-white">
                <div className="h-[2px] w-[30px] bg-[#f59a26] mb-3" />
                <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-wide">
                    Necesitas ayuda?
                </h2>
                <p className="mt-2 max-w-lg text-sm sm:text-base text-gray-200">
                    Asesoría técnica, cotizaciones y soporte especializado para tus proyectos.
                </p>
                </div>
            </div>
        </section>

        <section className="w-full px-6 md:px-[60px] mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="flex flex-wrap gap-3 rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-[#181818]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#f59a26]/10 text-[#f59a26]">
                        <BsClockHistory size={24} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base font-bold uppercase tracking-wide">
                        Respuesta rápida
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-[#c3c4c3]">
                        Nuestro equipo responde en menos de 24 horas.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-[#181818]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#f59a26]/10 text-[#f59a26]">
                    <BsTools size={24} />
                    </div>
                    <h3 className="text-base font-bold uppercase tracking-wide">
                    Soporte técnico especializado
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-[#c3c4c3]">
                    Expertos en electricidad, herramientas y suministros industriales.
                    </p>
                </div>

                <div className="flex flex-col gap-3 rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-[#181818]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#f59a26]/10 text-[#f59a26]">
                    <BsPersonCheck size={24} />
                    </div>
                    <h3 className="text-base font-bold uppercase tracking-wide">
                    Atención personalizada
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-[#c3c4c3]">
                    Te guiamos en cada etapa de tu compra o proyecto.
                    </p>
                </div>

                <div className="flex flex-col gap-3 rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-[#181818]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#f59a26]/10 text-[#f59a26]">
                    <BsGeoAlt size={24} />
                    </div>
                    <h3 className="text-base font-bold uppercase tracking-wide">
                    Presencia en Chile
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-[#c3c4c3]">
                    Atención local y confiable.
                    </p>
                </div>
            </div>
        </section>

        <main className="flex-1 w-full px-6 md:px-[60px] pb-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            <section className="lg:col-span-7 rounded-lg bg-white p-6 sm:p-10 shadow-md dark:bg-[#181818]">
                <div className="mb-6 flex flex-col gap-1">
                <h2 className="text-xl font-bold uppercase tracking-wide">
                    Envíanos tu consulta
                </h2>
                <p className="text-sm text-gray-600 dark:text-[#c3c4c3]">
                    Completa el formulario y uno de nuestros especialistas te contactará a la brevedad.
                </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        Nombre <span className="text-[#f59a26]">*</span>
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        className="w-full rounded-md border border-gray-200 bg-[#f5f5f5] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-[#f59a26]"
                    />
                    </div>

                    <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        Correo electrónico <span className="text-[#f59a26]">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@correo.com"
                        className="w-full rounded-md border border-gray-200 bg-[#f5f5f5] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-[#f59a26]"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+56 9 1234 5678"
                        className="w-full rounded-md border border-gray-200 bg-[#f5f5f5] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-[#f59a26]"
                    />
                    </div>

                    <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        Asunto <span className="text-[#f59a26]">*</span>
                    </label>
                    <input
                        type="text"
                        name="asunto"
                        required
                        value={formData.asunto}
                        onChange={handleChange}
                        placeholder="Cotización, Asesoría, etc."
                        className="w-full rounded-md border border-gray-200 bg-[#f5f5f5] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-[#f59a26]"
                    />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                    Mensaje <span className="text-[#f59a26]">*</span>
                    </label>
                    <textarea
                    name="mensaje"
                    rows={5}
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje o detalle de tu requerimiento..."
                    className="w-full resize-none rounded-md border border-gray-200 bg-[#f5f5f5] p-4 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-[#f59a26]"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#f59a26] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#d8821a] uppercase cursor-pointer"
                >
                    <BsSend size={16} />
                    Enviar Mensaje
                </button>
                </form>
            </section>

            <section className="lg:col-span-5 flex flex-col gap-6">
                <div className="rounded-lg bg-white p-6 sm:p-8 shadow-md dark:bg-[#181818] flex flex-col gap-5">
                <h2 className="text-xl font-bold uppercase tracking-wide">
                    Induwork Chile
                </h2>

                <div className="flex flex-col gap-4 text-sm text-gray-600 dark:text-[#c3c4c3]">
                    <a 
                    href="https://maps.google.com/?q=Antonio+Bellet+193,+Oficina+1210,+Providencia,+Santiago" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-3 hover:underline transition-all group"
                    >
                    <BsGeoAltFill className="text-[#f59a26] shrink-0 mt-1" size={18}/>
                    <span className="group-hover:text-[#f59a26] transition-colors">
                        Antonio Bellet 193, Oficina 1210, Providencia, Santiago
                    </span>
                    </a>

                    <div className="flex items-center gap-3">
                    <BsFillTelephoneFill className="text-[#f59a26] shrink-0" size={18}/>
                    <a href="tel:+56993619179" className="hover:underline transition-all md:hidden hover:text-[#f59a26]">
                        +56 9 9361 9179
                    </a>
                    <a 
                        href="https://wa.me/56993619179" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hidden md:inline hover:underline transition-all hover:text-[#f59a26]"
                    >
                        +56 9 9361 9179
                    </a>
                    </div>

                    <a 
                    href="mailto:ventas@induwork.cl" 
                    className="flex items-center gap-3 hover:underline transition-all group"
                    >
                    <BsEnvelopeFill className="text-[#f59a26] shrink-0" size={18}/>
                    <span className="group-hover:text-[#f59a26] transition-colors">
                        ventas@induwork.cl
                    </span>
                    </a>
                </div>
                </div>

                <div className="rounded-lg bg-white p-4 shadow-md dark:bg-[#181818] flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-wide px-2">
                    Encuéntranos fácilmente
                </h3>
                <div className="w-full h-[260px] overflow-hidden rounded-md border border-gray-100 dark:border-zinc-800">
                    <iframe
                    title="Mapa Induwork Chile"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.134761073801!2d-70.61746232357771!3d-33.42628429590892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf640f0c0cd7%3A0x8e2c4fa5eb02ddf8!2sAntonio%20Bellet%20193%2C%20Oficina%201210%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>
            </section>

            </div>
        </main>

        <Footer darkMode={darkMode} />
        </div>
    );
};

export default ContactPage;