import React from "react";
const Megaphone_02: React.FC<
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
        d="M13.46 16.494v4.498l-5.978-3.498v-3.499M7.482 13.495V7.498"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 13.484h4.405l10.465 4.511a.1.1 0 0 0 .114-.026c2.09-2.344 2.542-3.703 2.885-5.832.152-.95.178-1.92.06-2.875-.265-2.141-.743-3.617-2.945-6.235A.1.1 0 0 0 17.868 3L7.405 7.51H3z"
      />
    </svg>
  );
};
export default Megaphone_02;
