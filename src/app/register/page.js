import Link from "next/link";

export const metadata = {
    title: "Register - Sprazo",
    description: "Create a new Sprazo account",
};

export default function RegisterPage() {
    return (
        <>
            <section className="sp-breadcrumb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sp-breadcrumb-detail">
                                <h2 data-cursor="big">Register</h2>
                                <ul className="sp-breadcrumb-list">
                                    <li><Link href="/">Home</Link></li>
                                    <li>Register</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sp-register-page p-tb-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-12">
                            <div className="sp-auth-block border p-4 p-md-5 bg-light rounded login-form h-100">
                                <div className="sp-auth-title text-center mb-4">
                                    <h3>Create Account</h3>
                                    <p className="text-muted">Sign up to get started with Sprazo.</p>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="form-group col-md-6 mb-3">
                                            <label>First Name *</label>
                                            <input type="text" className="form-control" placeholder="First Name" required />
                                        </div>
                                        <div className="form-group col-md-6 mb-3">
                                            <label>Last Name *</label>
                                            <input type="text" className="form-control" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email Address *</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password *</label>
                                        <input type="password" className="form-control" placeholder="Enter your password" required />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label>Confirm Password *</label>
                                        <input type="password" className="form-control" placeholder="Confirm your password" required />
                                    </div>
                                    <div className="form-check mb-4">
                                        <input type="checkbox" className="form-check-input" id="terms" required />
                                        <label className="form-check-label text-muted small" htmlFor="terms">
                                            I agree to the <Link href="/terms" className="text-primary font-weight-bold">Terms & Conditions</Link> and <Link href="/privacy" className="text-primary font-weight-bold">Privacy Policy</Link>
                                        </label>
                                    </div>
                                    <button type="submit" className="sp-btn-1 w-100 mt-2">Sign Up</button>
                                </form>
                                <div className="sp-auth-footer text-center mt-4 pt-3 border-top">
                                    <p className="mb-0">Already have an account? <Link href="/login" className="font-weight-bold text-primary">Log in here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
