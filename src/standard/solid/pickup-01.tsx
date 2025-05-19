import React from "react";
const Pickup_01: React.FC<
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
        d="M17 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M7 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.84 3.013a1 1 0 0 0-.585.32A1 1 0 0 0 11 4v6.5H2a1 1 0 0 0-1 1v4.965a2 2 0 0 0 .89 1.664l.803.535c.192.128.403.221.624.276a3.8 3.8 0 1 1 7.35.06h2.666A3.804 3.804 0 0 1 17 14.2a3.8 3.8 0 0 1 3.667 4.8H21a2 2 0 0 0 2-2v-1.75h-1.258a.75.75 0 0 1 0-1.5H23v-.87a4 4 0 0 0-1.397-3.037l-2.18-1.868A1 1 0 0 1 19.2 7.7l-1.754-3.158A3 3 0 0 0 14.823 3h-2.801a1 1 0 0 0-.182.013m6.282 6.48 1.175 1.007h-2.943a1 1 0 0 1-.928-.628L13.477 5h1.346a1 1 0 0 1 .874.515l1.755 3.157a3 3 0 0 0 .67.821"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pickup_01;
