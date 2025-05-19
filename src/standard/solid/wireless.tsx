import React from "react";
const Wireless: React.FC<
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
        d="M1.75 4.5A2.75 2.75 0 0 1 4.5 1.75h15a2.75 2.75 0 0 1 2.75 2.75v15a2.75 2.75 0 0 1-2.75 2.75h-15a2.75 2.75 0 0 1-2.75-2.75zm5.619 7.202C8.675 10.64 10.265 10 11.995 10c1.734 0 3.33.643 4.638 1.712a1 1 0 0 1-1.265 1.55C14.374 12.45 13.215 12 11.994 12c-1.218 0-2.372.447-3.364 1.254a1 1 0 1 1-1.262-1.552m1.929 2.442a5.1 5.1 0 0 1 2.697-.783c.985 0 1.906.29 2.708.79a1 1 0 1 1-1.058 1.697 3.1 3.1 0 0 0-1.65-.487c-.58 0-1.135.168-1.643.483a1 1 0 1 1-1.054-1.7M12 16.5a1 1 0 1 0 0 2h.006a1 1 0 0 0 0-2zM5 4a1 1 0 0 0 0 2h.006a1 1 0 1 0 0-2zm3.994 0a1 1 0 1 0 0 2H9a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wireless;
