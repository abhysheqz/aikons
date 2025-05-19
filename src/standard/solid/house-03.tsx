import React from "react";
const House_03: React.FC<
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
        d="M22 20.75h-9.25v-10h10V20a.75.75 0 0 1-.75.75m-5.5-7.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m22.352 9.25-4.775-5.73a.75.75 0 0 0-.576-.27H7.355l4.997 6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.025 3.998 1.424 9.52a.75.75 0 0 0-.174.48v10c0 .414.336.75.75.75h3V16a1 1 0 1 1 2 0v4.75h4.25V10.271zM6 10a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default House_03;
