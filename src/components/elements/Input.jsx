const Input = ({
  type,
  id,
  name,
  placeholder,
  className,
  onChange,
  value,
  error,
  ...rest
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-sm border text-sm text-[#5B6B86] placeholder-[#5B6B86] outline-none font-normal transition-all duration-200 ${error ? "border-red-500" : "border-[#C8CED9]"}
         focus:border-[#0069A8] placeholder:text-sm ${className}`}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1 text-start">{error}</p>}
    </div>
  );
};

export default Input;
