import React from "react";
const Barns: React.FC<
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
        d="M17.006 12.25H2.25V7a.75.75 0 0 1 .386-.656l9-5a.75.75 0 0 1 .728 0l9 5A.75.75 0 0 1 21.75 7v5.25zM6.25 13.75h-4v9h4zm5.763 5.31-3.7 3.69h7.379zm9.737 3.69v-9h-4v9zm-9.737-5.81 3.18-3.19H8.814zM7.75 14.806v6.386L10.953 18zM13.074 18l3.176 3.186v-6.371zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Barns;
