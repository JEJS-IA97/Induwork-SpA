import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
    BsArrowLeft,
    BsCheckCircleFill,
    BsChevronRight,
    BsPerson,
    BsGeoAlt,
    BsTruck,
    BsCreditCard,
} from "react-icons/bs";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useCart } from "../../context/CartContext";

const CheckoutPage = ({ darkMode, setDarkMode }) => {
    const { cartItems, cartSubtotal } = useCart();

    const [checkoutMode, setCheckoutMode] = useState("guest");

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
        ciudad: "",
        estado: "",
        codigoPostal: "",
        pais: "",
    });

    const [shippingMethod, setShippingMethod] = useState("");

    const formatPrice = (value) => {
        if (typeof value !== "number") {
            return "Consultar";
        }

        return value.toLocaleString("es-CL", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    };

    const totalUnits = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return <Navigate to="/carrito" replace />;
    }

    return (
        <div className="flex min-h-screen flex-col bg-white text-black transition-colors dark:bg-zinc-950 dark:text-white">
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <main className="flex-1 px-6 pb-24 pt-32 md:px-[60px]">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8">
                        <Link
                            to="/carrito"
                            className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#f59a26] dark:text-gray-400"
                        >
                            <BsArrowLeft size={15} />
                            Volver al carrito
                        </Link>
                    </div>

                    <div className="mb-10">
                        <p className="mb-2 text-sm text-gray-400 dark:text-gray-500">
                            Induwork / Checkout
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Finalizar pedido
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                            Completa tus datos para preparar tu pedido y
                            seleccionar la modalidad de entrega.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
                        <div className="space-y-6">
                            <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#181818]">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f59a26]/10 text-[#f59a26]">
                                        <BsPerson size={18} />
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-bold">
                                            ¿Cómo quieres comprar?
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            Puedes completar la compra sin
                                            crear una cuenta.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setCheckoutMode("guest")
                                        }
                                        className={`cursor-pointer rounded-lg border p-4 text-left transition-colors ${
                                            checkoutMode === "guest"
                                                ? "border-[#f59a26] bg-[#f59a26]/5"
                                                : "border-gray-200 hover:border-gray-300 dark:border-zinc-700 dark:hover:border-zinc-600"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">
                                                Comprar como invitado
                                            </span>

                                            {checkoutMode === "guest" && (
                                                <BsCheckCircleFill
                                                    className="text-[#f59a26]"
                                                    size={17}
                                                />
                                            )}
                                        </div>

                                        <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                            No necesitas crear una cuenta.
                                            Solo proporciona tus datos para
                                            completar el pedido.
                                        </p>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setCheckoutMode("registered")
                                        }
                                        className={`cursor-pointer rounded-lg border p-4 text-left transition-colors ${
                                            checkoutMode === "registered"
                                                ? "border-[#f59a26] bg-[#f59a26]/5"
                                                : "border-gray-200 hover:border-gray-300 dark:border-zinc-700 dark:hover:border-zinc-600"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">
                                                Usuario registrado
                                            </span>

                                            {checkoutMode ===
                                                "registered" && (
                                                <BsCheckCircleFill
                                                    className="text-[#f59a26]"
                                                    size={17}
                                                />
                                            )}
                                        </div>

                                        <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                            Utiliza tus datos guardados para
                                            agilizar la compra.
                                        </p>
                                    </button>
                                </div>

                                {checkoutMode === "registered" && (
                                    <div className="mt-5 rounded-lg border border-dashed border-gray-300 p-5 dark:border-zinc-700">
                                        <p className="text-sm font-semibold">
                                            Inicia sesión para continuar
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                            Cuando conectemos el sistema de
                                            autenticación, aquí aparecerán
                                            tus direcciones y métodos de
                                            pago guardados.
                                        </p>

                                        <button
                                            type="button"
                                            className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#f59a26] hover:text-[#d8821a]"
                                        >
                                            Iniciar sesión
                                            <BsChevronRight size={14} />
                                        </button>
                                    </div>
                                )}
                            </section>

                            {checkoutMode === "guest" && (
                                <>
                                    <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#181818]">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f59a26]/10 text-[#f59a26]">
                                                <BsPerson size={18} />
                                            </div>

                                            <div>
                                                <h2 className="text-lg font-bold">
                                                    Datos de contacto
                                                </h2>

                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                    Usaremos estos datos para
                                                    comunicarnos contigo
                                                    sobre el pedido.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                                            <div className="md:col-span-2">
                                                <label
                                                    htmlFor="nombre"
                                                    className="mb-2 block text-sm font-semibold"
                                                >
                                                    Nombre completo
                                                </label>

                                                <input
                                                    id="nombre"
                                                    name="nombre"
                                                    type="text"
                                                    value={
                                                        formData.nombre
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    placeholder="Nombre y apellido"
                                                    className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-700 dark:bg-zinc-900"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="mb-2 block text-sm font-semibold"
                                                >
                                                    Correo electrónico
                                                </label>

                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={
                                                        formData.email
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    placeholder="correo@ejemplo.com"
                                                    className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-700 dark:bg-zinc-900"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="telefono"
                                                    className="mb-2 block text-sm font-semibold"
                                                >
                                                    Teléfono
                                                </label>

                                                <input
                                                    id="telefono"
                                                    name="telefono"
                                                    type="tel"
                                                    value={
                                                        formData.telefono
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    placeholder="+58 000 000 0000"
                                                    className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-700 dark:bg-zinc-900"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </section>

                                    <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#181818]">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f59a26]/10 text-[#f59a26]">
                                                <BsGeoAlt size={18} />
                                            </div>

                                            <div>
                                                <h2 className="text-lg font-bold">
                                                    Datos de entrega
                                                </h2>

                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                                    Necesitamos esta
                                                    información para preparar
                                                    el envío.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                                            <div className="md:col-span-2">
                                                <label
                                                    htmlFor="direccion"
                                                    className="mb-2 block text-sm font-semibold"
                                                >
                                                    Dirección
                                                </label>

                                                <input
                                                    id="direccion"
                                                    name="direccion"
                                                    type="text"
                                                    value={
                                                        formData.direccion
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    placeholder="Calle, número, referencia"
                                                    className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-700 dark:bg-zinc-900"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="ciudad"
                                                    className="mb-2 block text-sm font-semibold"
                                                >
                                                    Ciudad
                                                </label>

                                                <input
                                                    id="ciudad"
                                                    name="ciudad"
                                                    type="text"
                                                    value={
                                                        formData.ciudad
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    placeholder="Ciudad"
                                                    className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-700 dark:bg-zinc-900"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="estado"
                                                    className="mb-2 block text-sm font-semibold"
                                                >
                                                    Estado / Provincia
                                                </label>

                                                <input
                                                    id="estado"
                                                    name="estado"
                                                    type="text"
                                                    value={
                                                        formData.estado
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    placeholder="Estado o provincia"
                                                    className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-700 dark:bg-zinc-900"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="codigoPostal"
                                                    className="mb-2 block text-sm font-semibold"
                                                >
                                                    Código postal
                                                </label>

                                                <input
                                                    id="codigoPostal"
                                                    name="codigoPostal"
                                                    type="text"
                                                    value={
                                                        formData.codigoPostal
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    placeholder="Código postal"
                                                    className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-700 dark:bg-zinc-900"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="pais"
                                                    className="mb-2 block text-sm font-semibold"
                                                >
                                                    País
                                                </label>

                                                <input
                                                    id="pais"
                                                    name="pais"
                                                    type="text"
                                                    value={
                                                        formData.pais
                                                    }
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                    placeholder="País"
                                                    className="h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-colors focus:border-[#f59a26] dark:border-zinc-700 dark:bg-zinc-900"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </section>
                                </>
                            )}

                            <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#181818]">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f59a26]/10 text-[#f59a26]">
                                        <BsTruck size={18} />
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-bold">
                                            Método de entrega
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            Selecciona cómo deseas recibir
                                            tu pedido.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShippingMethod("delivery")
                                        }
                                        className={`cursor-pointer rounded-lg border p-4 text-left transition-colors ${
                                            shippingMethod === "delivery"
                                                ? "border-[#f59a26] bg-[#f59a26]/5"
                                                : "border-gray-200 dark:border-zinc-700"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">
                                                Entrega a domicilio
                                            </span>

                                            {shippingMethod ===
                                                "delivery" && (
                                                <BsCheckCircleFill
                                                    className="text-[#f59a26]"
                                                    size={17}
                                                />
                                            )}
                                        </div>

                                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                            El costo y tiempo de entrega se
                                            calcularán según la dirección.
                                        </p>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShippingMethod(
                                                "pickup"
                                            )
                                        }
                                        className={`cursor-pointer rounded-lg border p-4 text-left transition-colors ${
                                            shippingMethod === "pickup"
                                                ? "border-[#f59a26] bg-[#f59a26]/5"
                                                : "border-gray-200 dark:border-zinc-700"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">
                                                Retiro / entrega acordada
                                            </span>

                                            {shippingMethod ===
                                                "pickup" && (
                                                <BsCheckCircleFill
                                                    className="text-[#f59a26]"
                                                    size={17}
                                                />
                                            )}
                                        </div>

                                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                            La modalidad definitiva se
                                            confirmará durante el proceso
                                            del pedido.
                                        </p>
                                    </button>
                                </div>
                            </section>

                            <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#181818]">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f59a26]/10 text-[#f59a26]">
                                        <BsCreditCard size={18} />
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-bold">
                                            Pago
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            El método de pago se integrará
                                            con el proveedor correspondiente.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-5 dark:border-zinc-700">
                                    <p className="text-sm font-semibold">
                                        Pago seguro
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                        En esta etapa dejamos preparada la
                                        sección de pago. No almacenaremos
                                        números completos de tarjeta en
                                        nuestra aplicación.
                                    </p>
                                </div>
                            </section>
                        </div>

                        <aside className="h-fit rounded-xl border border-gray-200 bg-white dark:border-zinc-800 dark:bg-[#181818] lg:sticky lg:top-28">
                            <div className="border-b border-gray-200 p-6 dark:border-zinc-800">
                                <h2 className="text-xl font-bold">
                                    Resumen
                                </h2>

                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    {totalUnits}{" "}
                                    {totalUnits === 1
                                        ? "unidad"
                                        : "unidades"}
                                </p>
                            </div>

                            <div className="max-h-[420px] overflow-y-auto divide-y divide-gray-200 dark:divide-zinc-800">
                                {cartItems.map((item) => {
                                    const itemTotal =
                                        typeof item.precio === "number"
                                            ? item.precio *
                                              item.quantity
                                            : 0;

                                    return (
                                        <div
                                            key={item.id}
                                            className="flex gap-4 p-5"
                                        >
                                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-zinc-800">
                                                <img
                                                    src={item.imagen}
                                                    alt={item.nombre}
                                                    className="h-full w-full object-cover"
                                                />

                                                <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f59a26] px-1 text-[10px] font-bold text-white">
                                                    {item.quantity}
                                                </span>
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="line-clamp-2 text-sm font-semibold">
                                                    {item.nombre}
                                                </p>

                                                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                                                    $
                                                    {formatPrice(
                                                        item.precio
                                                    )}{" "}
                                                    c/u
                                                </p>

                                                <p className="mt-2 text-sm font-bold text-[#f59a26]">
                                                    $
                                                    {formatPrice(
                                                        itemTotal
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="border-t border-gray-200 p-6 dark:border-zinc-800">
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">
                                            Subtotal
                                        </span>

                                        <span className="font-semibold">
                                            $
                                            {formatPrice(
                                                cartSubtotal
                                            )}
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">
                                            Envío
                                        </span>

                                        <span className="text-gray-400 dark:text-gray-500">
                                            Por calcular
                                        </span>
                                    </div>

                                    <div className="border-t border-gray-200 pt-4 dark:border-zinc-800">
                                        <div className="flex items-end justify-between gap-4">
                                            <span className="font-semibold">
                                                Total
                                            </span>

                                            <span className="text-2xl font-bold text-[#f59a26]">
                                                $
                                                {formatPrice(
                                                    cartSubtotal
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#f59a26] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#d8821a]"
                                >
                                    Confirmar pedido
                                    <BsChevronRight size={15} />
                                </button>

                                <p className="mt-4 text-center text-[11px] leading-5 text-gray-400 dark:text-gray-500">
                                    Al confirmar, tus datos serán
                                    utilizados para procesar y gestionar
                                    el pedido.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer darkMode={darkMode} />
        </div>
    );
};

export default CheckoutPage;