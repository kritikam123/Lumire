const Textarea = ({
  className = "",
  varient,
  disabled,
  value,
  required,
  placeholder,
  resize,
  color,
  onChange,
  ...props
}) => {
  return (
    <textarea
      className={`w-full px-2 py-4 bg-${varient} border border-gray-300 rounded-sm resize-${resize} text-${color} text-sm font-normal leading-none tracking-normal outline-none focus:border-[#0069A8] transition-all duration-200 ease-in-out ${className}`}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      {...props}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
