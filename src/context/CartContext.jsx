/* eslint-disable react-refresh/only-export-components */

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    useCallback,
} from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "induwork-cart";

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem(CART_STORAGE_KEY);

            return savedCart ? JSON.parse(savedCart) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

    const addToCart = useCallback((product) => {
        setCartItems((currentItems) => {
            const hasExistingProduct = currentItems.some(
                (item) => item.id === product.id
            );

            if (hasExistingProduct) {
                return currentItems.map((item) =>
                    item.id === product.id
                        ? {
                                ...item,
                                quantity: item.quantity + 1,
                            }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    id: product.id,
                    imagen: product.imagen,
                    nombre: product.nombre,
                    subnombre: product.subnombre,
                    descripcion: product.descripcion,
                    precio: product.precio,
                    categoria: product.categoria,
                    slug: product.slug,
                    quantity: 1,
                },
            ];
        });
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== productId)
        );
    }, []);

    const updateQuantity = useCallback((productId, quantity) => {
        const newQuantity = Number(quantity);

        if (!Number.isFinite(newQuantity) || newQuantity < 1) {
            return;
        }

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? {
                            ...item,
                            quantity: newQuantity,
                        }
                    : item
            )
        );
    }, []);

    const incrementQuantity = useCallback((productId) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                    : item
            )
        );
    }, []);

    const decrementQuantity = useCallback((productId) => {
        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item.id === productId
                        ? {
                                ...item,
                                quantity: item.quantity - 1,
                            }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const cartCount = useMemo(
        () =>
            cartItems.reduce(
                (total, item) => total + item.quantity,
                0
            ),
        [cartItems]
    );

    const cartSubtotal = useMemo(
        () =>
            cartItems.reduce(
                (total, item) =>
                    total +
                    (typeof item.precio === "number"
                        ? item.precio * item.quantity
                        : 0),
                0
            ),
        [cartItems]
    );

    const value = useMemo(
        () => {
            const isInCart = (productId) =>
                cartItems.some((item) => item.id === productId);

            return {
                cartItems,
                cartCount,
                cartSubtotal,
                addToCart,
                removeFromCart,
                updateQuantity,
                incrementQuantity,
                decrementQuantity,
                clearCart,
                isInCart,
            };
        },
        [
            cartItems,
            cartCount,
            cartSubtotal,
            addToCart,
            removeFromCart,
            updateQuantity,
            incrementQuantity,
            decrementQuantity,
            clearCart,
        ]
    );

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart debe utilizarse dentro de un CartProvider"
        );
    }

    return context;
};

export default CartContext;