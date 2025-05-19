import React from "react";
const Imo: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.844.465 3.582 1.285 5.1l-1.26 4.706a.75.75 0 0 0 .919.918L6.9 21.466A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m-5.243 7H5.248v1.5h1.509zm-.008 7.5v-5.5h-1.5v5.5zm7.197-5.5H7.663v5.5h1.5v-4h.891v4h1.5v-4h.892v4h1.5zm4.804 0h-3.891v5.5h3.891zm-2.391 4v-2.5h.891v2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Imo;
