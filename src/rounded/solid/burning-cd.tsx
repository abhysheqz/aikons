import React from "react";
const BurningCd: React.FC<
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
        d="M13.375 5a1 1 0 0 1 1-1 8 8 0 1 1 0 16 1 1 0 1 1 0-2 6 6 0 0 0 0-12 1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M14.375 15a3 3 0 1 0 0-6z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.44 1.331c-.788-.081-1.78-.081-3.023-.081h-.084c-1.244 0-2.235 0-3.024.081-.809.084-1.495.26-2.085.675q-.42.297-.748.686c-.466.558-.667 1.213-.76 1.977-.091.733-.091 1.65-.091 2.782v9.098c0 1.131 0 2.05.09 2.782.094.764.295 1.42.761 1.977.217.259.469.49.748.686.59.415 1.276.591 2.085.675.789.081 1.78.081 3.024.081h.084c1.244 0 2.235 0 3.024-.081.809-.084 1.495-.26 2.085-.675q.42-.297.748-.686c.467-.558.667-1.213.76-1.977.091-.733.091-1.65.091-2.782V7.45c0-1.131 0-2.049-.09-2.782-.094-.764-.294-1.42-.761-1.977a4 4 0 0 0-.748-.686c-.59-.415-1.276-.591-2.085-.675M10.376 13.5a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BurningCd;
