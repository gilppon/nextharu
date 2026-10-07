import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div role="alert" style={{ padding: '24px', color: '#e8e6e0', background: '#070709', minHeight: '100vh' }}>
                    <h1>Something went wrong</h1>
                    <p>Please refresh the page and try again.</p>
                    {import.meta.env.DEV && this.state.error && (
                        <pre style={{ whiteSpace: 'pre-wrap', color: '#ff8a8a' }}>{this.state.error.toString()}</pre>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
