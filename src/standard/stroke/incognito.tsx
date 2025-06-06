import React from "react";
const Incognito: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 18a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM20 18a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12h20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 16.5c-.537-.808-1.457-1.5-2.5-1.5s-1.963.692-2.5 1.5M3 12l1.662-6.297c.097-.367.145-.55.192-.681.681-1.896 2.91-2.621 4.519-1.47.11.079.252.2.535.444.162.14.243.21.318.267 1.056.8 2.492.8 3.548 0 .075-.057.156-.127.319-.267.282-.243.424-.365.534-.444 1.61-1.151 3.838-.426 4.52 1.47.046.13.095.314.191.68L21 12z"
      />
    </svg>
  );
};
export default Incognito;
