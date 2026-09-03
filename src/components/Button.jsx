import { Link } from "react-router-dom";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary: "bg-navy-900 text-white hover:bg-navy-800",
  outline: "border border-navy-900/20 text-navy-900 hover:border-navy-900 hover:bg-white",
  ghost: "text-navy-900 hover:text-accent",
};

/**
 * Reusable CTA button. Renders a <Link> for internal routes (`to`),
 * an <a> for external links (`href`), or a <button> otherwise.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
