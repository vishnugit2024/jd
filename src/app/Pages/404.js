import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Custom404() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="text-muted">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <a className="btn btn-lg btn-danger px-5 py-3 mt-3 fw-bold shadow btn-hover">
          Go Back Home
        </a>
      </Link>

      {/* Custom CSS */}
      <style jsx>{`
        .btn-hover {
          transition: all 0.3s ease-in-out;
        }

        .btn-hover:hover {
          transform: translateY(-5px);
          background: #ff4d4d;
          box-shadow: 0px 4px 15px rgba(255, 77, 77, 0.5);
        }
      `}</style>
    </div>
  );
}
