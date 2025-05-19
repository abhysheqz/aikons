import React from "react";
const Mosque_04: React.FC<
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
        d="M17 22V10H7v12zM4.5 12v-2M19.5 12v-2M1 12h6M9.025 10C5.94 6 10.678 4 12 2c1.322 2 6.06 4 2.975 8zM23 12h-6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 22v-3c0-.978 0-1.467.142-1.913a3 3 0 0 1 .413-.826c.271-.38.662-.674 1.445-1.261.783.587 1.174.88 1.445 1.261a3 3 0 0 1 .413.826C14 17.533 14 18.022 14 19v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.012 22V12H7v10zM17 22l.11-10h3.888v10z"
      />
    </svg>
  );
};
export default Mosque_04;
