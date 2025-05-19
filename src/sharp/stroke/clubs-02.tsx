import React from "react";
const Clubs_02: React.FC<
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
        strokeWidth={1.5}
        d="M12 2C9.79 2 8 3.853 8 6.139c0 .753.195 1.46.535 2.069C5.958 7.522 3 9.51 3 12.346c0 3.205 3.14 4.678 5.81 3.98L10 16l-1.5 6h7L14 16l1.19.327c2.659.694 5.81-.808 5.81-3.98 0-2.816-2.967-4.823-5.535-4.14A4.23 4.23 0 0 0 16 6.14C16 3.853 14.21 2 12 2Z"
      />
    </svg>
  );
};
export default Clubs_02;
