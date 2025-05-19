import React from "react";
const Pexels: React.FC<
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
        d="M9.75 15.25v-6.5h3.75a1.75 1.75 0 1 1 0 3.5h-1.25v3z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 2.25H2.25v19.5h19.5zm-8.25 5H8.25v9.5h5.5v-3.01a3.25 3.25 0 0 0-.25-6.49"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pexels;
