import React from "react";
const Radio_01: React.FC<
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
        d="M1.25 8A3.75 3.75 0 0 1 5 4.25h14A3.75 3.75 0 0 1 22.75 8v11A3.75 3.75 0 0 1 19 22.75H5A3.75 3.75 0 0 1 1.25 19zm14.655 2.957a3.5 3.5 0 0 0-5.81 3.354zm1 1.732-5.81 3.354a3.5 3.5 0 0 0 5.81-3.354M10.75 8.738a5.5 5.5 0 1 1 5.5 9.525 5.5 5.5 0 0 1-5.5-9.525M6 8a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.56 5.82a1 1 0 0 1 .664-1.249L16.7 1.055a1 1 0 0 1 .586 1.912L5.809 6.483A1 1 0 0 1 4.56 5.82"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radio_01;
