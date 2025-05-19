import React from "react";
const Cos: React.FC<
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
        d="M8.5 9.5a3.5 3.5 0 1 1 7 0v5a3.5 3.5 0 1 1-7 0zM12 8a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5A1.5 1.5 0 0 0 12 8M16 9.5C16 7.787 17.146 6 19 6h.5c1.442 0 2.564.99 3.104 2.211l-1.829.809C20.463 8.314 19.944 8 19.5 8H19c-.356 0-1 .452-1 1.5s.644 1.5 1 1.5h1c1.854 0 3 1.787 3 3.5S21.854 18 20 18h-.5c-1.57 0-2.754-1.167-3.236-2.545l1.888-.66c.29.83.868 1.205 1.348 1.205h.5c.356 0 1-.452 1-1.5s-.644-1.5-1-1.5h-1c-1.854 0-3-1.787-3-3.5M1 9.5C1 7.51 2.697 6 4.659 6c1.363 0 2.577.717 3.208 1.817l-1.734.995C5.865 8.346 5.32 8 4.659 8 3.684 8 3 8.729 3 9.5v5c0 .771.684 1.5 1.659 1.5.66 0 1.206-.346 1.474-.812l1.734.995C7.237 17.284 6.022 18 4.66 18 2.697 18 1 16.49 1 14.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cos;
