import React from "react";
const AiBook: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.556 1.25c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433V17a.75.75 0 0 1-.75.75 1.75 1.75 0 1 0 0 3.5.75.75 0 0 1 0 1.5H6a3.25 3.25 0 0 1-3.25-3.25V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153zM4.25 19.5c0 .966.784 1.75 1.75 1.75h11.76a3.24 3.24 0 0 1-.51-1.75c0-.644.188-1.245.51-1.75H6a1.75 1.75 0 0 0-1.75 1.75m5.904-13.25c-.614 0-1.206.376-1.407.998l-1.46 4.521a.75.75 0 0 0 1.427.462l.317-.981h2.246l.317.98a.75.75 0 0 0 1.428-.46L11.56 7.247c-.201-.622-.793-.998-1.407-.998m0 1.523.639 1.977H9.515zM15.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBook;
