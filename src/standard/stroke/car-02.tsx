import React from "react";
const Car_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.45 17.414A2 2 0 0 1 2 15.491v-3.054c0-1.192 1.071-1.83 1.887-2.51A4 4 0 0 1 6.448 9h11.104a4 4 0 0 1 2.56.927c.817.68 1.888 1.318 1.888 2.51v3.054a2 2 0 0 1-1.45 1.923c-1.179.337-2.357.586-3.59.586H7.04c-1.233 0-2.411-.249-3.59-.586"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 15.5V20a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2M17 18v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4.5M2.5 12l1.5.5M21.5 12l-1.5.5M2.5 8.5l2 .5M21.5 8.5 20 9M4.5 9l1.252-4.172c.158-.529.529-.966 1.055-1.133C7.736 3.401 9.467 3 12 3s4.264.401 5.193.695c.526.167.897.605 1.055 1.133L19.5 9M8 18l.772-2.316A1 1 0 0 1 9.721 15h4.558a1 1 0 0 1 .949.684L16 18"
      />
    </svg>
  );
};
export default Car_02;
