const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
