import { Link } from "react-router-dom";
import {
    BsArrowLeft,
    BsDash,
    BsPlus,
    BsTrash,
} from "react-icons/bs";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useCart } from "../../context/CartContext";
import { slugify } from "../../utils/slugify";

const CartPage = ({ darkMode, setDarkMode }) => {
    const {
        cartItems,
        cartSubtotal,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
    } = useCart();

    const formatPrice = (value) => {
        if (typeof value !== "number") {
            return "Consultar";
        }

        return value.toLocaleString("es-CL", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    };

    const subtotalFormateado = formatPrice(cartSubtotal);

    return (
        <div className="flex min-h-screen flex-col bg-white text-black transition-colors dark:bg-zinc-950 dark:text-white">
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <main className="flex-1 px-6 pb-24 pt-32 md:px-[60px]">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex items-end justify-between gap-4">
                        <div>
                            <p className="mb-2 text-sm text-gray-400 dark:text-gray-500">
                                Induwork / Carrito
                            </p>

                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Tu carrito
                            </h1>
                        </div>

                        <Link
                            to="/tienda"
                            className="hidden items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-[#f59a26] dark:text-gray-400 sm:flex"
                        >
                            <BsArrowLeft size={16} />
                            Continuar comprando
                        </Link>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-6 text-center dark:border-zinc-800 dark:bg-[#181818]">
                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-800">
                                <BsArrowLeft
                                    size={24}
                                    className="rotate-180 text-gray-500"
                                />
                            </div>

                            <h2 className="text-xl font-bold">
                                Tu carrito está vacío
                            </h2>

                            <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
                                Agrega productos desde nuestra tienda
                                para comenzar tu pedido.
                            </p>

                            <Link
                                to="/tienda"
                                className="mt-6 rounded-md bg-[#f59a26] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d8821a]"
                            >
                                Explorar productos
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
                            <section className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-zinc-800 dark:bg-[#181818]">
                                <div className="border-b border-gray-200 px-6 py-5 dark:border-zinc-800">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-lg font-bold">
                                                Productos
                                            </h2>

                                            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                                                Revisa los productos y
                                                cantidades antes de
                                                continuar.
                                            </p>
                                        </div>

                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {cartItems.reduce(
                                                (total, item) =>
                                                    total +
                                                    item.quantity,
                                                0
                                            )}{" "}
                                            unidades
                                        </span>
                                    </div>
                                </div>

                                <div className="hidden grid-cols-[minmax(260px,1.2fr)_minmax(180px,1fr)_100px_130px] gap-6 border-b border-gray-200 px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:border-zinc-800 dark:text-gray-500 md:grid">
                                    <span>Producto</span>
                                    <span>Descripción</span>
                                    <span>Cantidad</span>
                                    <span className="text-right">
                                        Total
                                    </span>
                                </div>

                                <div className="divide-y divide-gray-200 dark:divide-zinc-800">
                                    {cartItems.map((item) => {
                                        const itemTotal =
                                            typeof item.precio ===
                                            "number"
                                                ? item.precio *
                                                  item.quantity
                                                : 0;

                                        const categorySlug = slugify(
                                            item.categoria || ""
                                        );

                                        const productUrl = item.categoria
                                            ? `/tienda/${categorySlug}/${item.slug}`
                                            : `/tienda/${item.slug}`;

                                        return (
                                            <article
                                                key={item.id}
                                                className="grid grid-cols-1 gap-5 px-5 py-6 md:grid-cols-[minmax(260px,1.2fr)_minmax(180px,1fr)_100px_130px] md:items-center md:gap-6 md:px-6"
                                            >
                                                <div className="flex min-w-0 items-center gap-4">
                                                    <Link
                                                        to={productUrl}
                                                        className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-zinc-800"
                                                    >
                                                        <img
                                                            src={
                                                                item.imagen
                                                            }
                                                            alt={
                                                                item.nombre
                                                            }
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </Link>

                                                    <div className="min-w-0">
                                                        <Link
                                                            to={productUrl}
                                                            className="line-clamp-2 text-base font-bold transition-colors hover:text-[#f59a26]"
                                                        >
                                                            {
                                                                item.nombre
                                                            }
                                                        </Link>

                                                        {item.subnombre && (
                                                            <p className="mt-1 line-clamp-1 text-xs text-gray-400 dark:text-gray-500">
                                                                {
                                                                    item.subnombre
                                                                }
                                                            </p>
                                                        )}

                                                        <p className="mt-2 text-sm font-semibold text-[#f59a26] md:hidden">
                                                            $
                                                            {formatPrice(
                                                                item.precio
                                                            )}{" "}
                                                            <span className="font-normal text-gray-400 dark:text-gray-500">
                                                                c/u
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-gray-400 md:hidden dark:text-gray-500">
                                                        Descripción
                                                    </p>

                                                    <p
                                                        className="line-clamp-3 text-sm leading-6 text-gray-500 dark:text-gray-400"
                                                        title={
                                                            item.descripcion
                                                        }
                                                    >
                                                        {item.descripcion ||
                                                            "Sin descripción disponible."}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between gap-4 md:block">
                                                    <div>
                                                        <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 md:hidden">
                                                            Cantidad
                                                        </p>

                                                        <div className="flex w-fit items-center overflow-hidden rounded-md border border-gray-200 dark:border-zinc-700">
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    decrementQuantity(
                                                                        item.id
                                                                    )
                                                                }
                                                                className="flex h-9 w-9 cursor-pointer items-center justify-center text-gray-500 transition-colors hover:text-[#f59a26]"
                                                                aria-label="Disminuir cantidad"
                                                            >
                                                                <BsDash
                                                                    size={
                                                                        16
                                                                    }
                                                                />
                                                            </button>

                                                            <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-200 px-2 text-sm font-semibold dark:border-zinc-700">
                                                                {
                                                                    item.quantity
                                                                }
                                                            </span>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    incrementQuantity(
                                                                        item.id
                                                                    )
                                                                }
                                                                className="flex h-9 w-9 cursor-pointer items-center justify-center text-gray-500 transition-colors hover:text-[#f59a26]"
                                                                aria-label="Aumentar cantidad"
                                                            >
                                                                <BsPlus
                                                                    size={
                                                                        16
                                                                    }
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-start md:items-end">
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        $
                                                        {formatPrice(
                                                            item.precio
                                                        )}{" "}
                                                        c/u
                                                    </p>

                                                    <p className="mt-0.5 text-xl font-bold text-[#f59a26]">
                                                        $
                                                        {formatPrice(
                                                            itemTotal
                                                        )}
                                                    </p>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeFromCart(item.id)
                                                        }
                                                        className="mt-2 cursor-pointer text-gray-400 transition-colors hover:text-red-500"
                                                        aria-label={`Eliminar ${item.nombre}`}
                                                        title="Eliminar producto"
                                                    >
                                                        <BsTrash size={16} />
                                                    </button>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>

                                <div className="border-t border-gray-200 px-6 py-5 dark:border-zinc-800">
                                    <Link
                                        to="/tienda"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-[#f59a26] dark:text-gray-400"
                                    >
                                        <BsArrowLeft size={15} />
                                        Continuar comprando
                                    </Link>
                                </div>
                            </section>

                            <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#181818] lg:sticky lg:top-28">
                                <h2 className="text-xl font-bold">
                                    Resumen del pedido
                                </h2>

                                <div className="mt-7 space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">
                                            Subtotal
                                        </span>

                                        <span className="font-semibold">
                                            ${subtotalFormateado}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">
                                            Envío
                                        </span>

                                        <span className="text-gray-400 dark:text-gray-500">
                                            Por calcular
                                        </span>
                                    </div>
                                </div>

                                <div className="my-6 border-t border-gray-200 dark:border-zinc-800" />

                                <div className="flex items-end justify-between gap-4">
                                    <span className="text-base font-semibold">
                                        Total
                                    </span>

                                    <span className="text-2xl font-bold text-[#f59a26]">
                                        ${subtotalFormateado}
                                    </span>
                                </div>

                                <Link
                                    to="/checkout"
                                    className="mt-7 flex w-full items-center justify-center rounded-md bg-[#f59a26] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#d8821a]"
                                >
                                    Continuar al checkout
                                </Link>

                                <p className="mt-4 text-center text-xs leading-5 text-gray-400 dark:text-gray-500">
                                    Los costos de envío y los datos
                                    necesarios para completar el
                                    pedido se solicitarán en el
                                    checkout.
                                </p>
                            </aside>
                        </div>
                    )}
                </div>
            </main>

            <Footer darkMode={darkMode} />
        </div>
    );
};

export default CartPage;