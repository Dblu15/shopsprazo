import Link from "next/link";

export const metadata = {
    title: "Login - Sprazo",
    description: "Login to your Sprazo account",
};

export default function LoginPage() {
    return (
        <>
            <section className="sp-breadcrumb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-detail">
                                <h2 data-cursor="big">Login</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li><Link href="/">Home</Link></li>
                                    <li>Login</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp-login-page p-tb-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8 col-12">
                            <div className="sp-auth-block border p-4 bg-light rounded login-form h-100">
                                <div className="sp-auth-title text-center mb-4">
                                    <h3>Log In</h3>
                                    <p className="text-muted">Welcome back! Please login to your account.</p>
                                </div>
                                <form>
                                    <div className="form-group mb-3">
                                        <label>Email Address *</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password *</label>
                                        <input type="password" className="form-control" placeholder="Enter your password" required />
                                    </div>
                                    <div className="form-group mb-4 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="remember" />
                                            <label className="form-check-label" htmlFor="remember">Remember me</label>
                                        </div>
                                        <a href="#" className="font-weight-bold text-primary">Forgot Password?</a>
                                    </div>
                                    <button type="submit" className="sp-btn-1 w-100 mt-2">Log In</button>
                                </form>
                                <div className="sp-auth-footer text-center mt-4 pt-3 border-top">
                                    <p className="mb-0">Don't have an account? <Link href="/register" className="font-weight-bold text-primary">Sign up here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
