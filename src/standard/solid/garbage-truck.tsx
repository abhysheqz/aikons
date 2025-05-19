import React from "react";
const GarbageTruck: React.FC<
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
        d="M14 7a1 1 0 0 1 1-1h3.264a3 3 0 0 1 2.683 1.658l1.947 3.895a1 1 0 1 1-1.788.894l-1.948-3.894A1 1 0 0 0 18.264 8H15a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M7 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.414 3A2 2 0 0 0 6 3.586L1.586 8A2 2 0 0 0 1 9.414V17a2 2 0 0 0 2 2h.333A3.804 3.804 0 0 1 7 14.2a3.8 3.8 0 0 1 3.667 4.8h2.666A3.804 3.804 0 0 1 17 14.2a3.8 3.8 0 0 1 3.667 4.8H21a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1h-6V5h1a1 1 0 1 0 0-2zm4.336 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm-4 1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GarbageTruck;
