import React from "react";
const GuestHouse: React.FC<
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
        d="M9 22a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M19.25 4.014l-6.253-2.431a2.75 2.75 0 0 0-1.993 0L2.728 4.8a.75.75 0 0 0 .522 1.406V19c0 .414.336.75.75.75h5.251l-.001-.042V14a2.75 2.75 0 1 1 5.5 0v5.708l-.001.042H20a.75.75 0 0 0 .75-.75V6.207a.75.75 0 0 0 .522-1.406l-.522-.203V3a.75.75 0 0 0-1.5 0zM13.251 19.75l-.001-.042V14a1.25 1.25 0 1 0-2.5 0v5.708l-.001.042zM10.5 8A1.5 1.5 0 0 1 12 6.5h.012a1.5 1.5 0 0 1 0 3H12A1.5 1.5 0 0 1 10.5 8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GuestHouse;
