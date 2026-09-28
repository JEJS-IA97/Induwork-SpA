import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen flex-col items-center justify-center bg-[#efefef] px-6 text-center dark:bg-zinc-950">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Algo salió mal
                    </h1>
                    <p className="mt-3 max-w-md text-sm text-gray-500 dark:text-gray-400">
                        Ocurrió un error inesperado. Por favor, intenta recargar la página.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 rounded-md bg-[#f59a26] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d8821a] cursor-pointer"
                    >
                        Recargar página
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
