import React from "react";
const CheckmarkCircle_04: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25c2.646 0 5.07.956 6.942 2.542l-6.98 7.756-2.755-2.755-1.414 1.414 4.245 4.245 8.307-9.23A10.7 10.7 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75"
      />
    </svg>
  );
};
export default CheckmarkCircle_04;
