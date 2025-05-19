import React from "react";
const Patient: React.FC<
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
        d="M20.75 15A2.75 2.75 0 0 0 18 12.25l-12-.001a2.75 2.75 0 0 0-2.75 2.75v7.75H14.5a2.25 2.25 0 1 0 0-4.5h-2.528l-1.588-4.5H18c.69 0 1.25.56 1.25 1.25v7.75h1.5zm-8.248 4.749.53 1.5H14.5a.75.75 0 0 0 0-1.5zm-6.502-6h.25v7.5h-1.5v-6.25c0-.69.56-1.25 1.25-1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
      />
    </svg>
  );
};
export default Patient;
