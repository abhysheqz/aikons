import React from "react";
const Plug_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 5.685 4.413 10.34 10 10.724V18.75h-1.1l-2.9-3.479V10.25h2.002V8h1.5v2.25h2.5V8h1.5v2.25h1.998v5.021l-2.898 3.479H12.75v3.974c5.587-.385 10-5.04 10-10.724 0-5.937-4.813-10.75-10.75-10.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plug_02;
