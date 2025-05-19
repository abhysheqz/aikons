import React from "react";
const Archive_03: React.FC<
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
        d="M21 7H3v6c0 3.771 0 5.657 1.172 6.828S7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172S21 16.771 21 13zM21 7H3l1.2-1.6c.883-1.178 1.325-1.767 1.958-2.083C6.792 3 7.528 3 9 3h6c1.472 0 2.208 0 2.842.317.633.316 1.075.905 1.958 2.083z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17v-6.5m-3 4c.59.607 2.16 3 3 3s2.41-2.393 3-3"
      />
    </svg>
  );
};
export default Archive_03;
