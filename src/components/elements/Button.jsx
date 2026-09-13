const Button = ({
  buttonId = "",
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      id={buttonId}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-6 py-3 bg-[#f4f2ee] text-black text-sm font-medium rounded transition-all duration-300 hover:bg-[#5A4636]
        disabled:opacity-50
        disabled:cursor-not-allowed 
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
