import React from "react";
const Repeat: React.FC<
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
        d="M20.173 7.18a1 1 0 0 1 1.393.248A8 8 0 0 1 15 20H8.261l.878.732a1 1 0 1 1-1.28 1.536l-3-2.5A1 1 0 0 1 5.5 18H15a6 6 0 0 0 4.925-9.428 1 1 0 0 1 .248-1.392M3.827 16.82a1 1 0 0 1-1.392-.248A8 8 0 0 1 9 4h6.737l-.878-.732a1 1 0 1 1 1.28-1.536l3 2.5A1 1 0 0 1 18.5 6H9a6 6 0 0 0-4.925 9.428 1 1 0 0 1-.248 1.392"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Repeat;
