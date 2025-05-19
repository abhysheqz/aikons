import React from "react";
const Envato: React.FC<
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
        d="M17.79 1.258a.75.75 0 0 1 .727.32c3.343 4.92 3.934 10.167 2.502 14.234-1.437 4.078-4.914 6.938-9.533 6.938-3.682 0-6.808-2.325-8.295-5.363-1.5-3.063-1.364-6.923 1.556-9.95l1.774-1.51s-.368.846-.518 2.525c-.15 1.68.161 2.675.518 3.735C7.701 7.351 11.458 2.17 17.79 1.257"
      />
    </svg>
  );
};
export default Envato;
