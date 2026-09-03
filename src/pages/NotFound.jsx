import Seo from "../components/Seo";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="section">
        <div className="container-lb text-center py-20">
          <p className="text-sm font-semibold text-accent">404</p>
          <h1 className="mt-3 text-3xl font-display font-bold text-navy-900">Page Not Found</h1>
          <p className="mt-3 text-ink/70">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/" variant="primary">Back to Home</Button>
            <Button to="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
