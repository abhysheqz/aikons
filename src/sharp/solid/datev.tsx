import React from "react";
const Datev: React.FC<
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
        d="M.75 9h1.5a3 3 0 1 1 0 6H.75zm1 1v4h.5a2 2 0 1 0 0-4zm5.785 5v-1h1.514l-1.287-3.754L6.341 15H5.297L7.09 9h1.3l2.058 6zm14.515-5-1.29 3.765L19.273 9h-1.047l1.87 6h1.296l2.057-6h-2.914v1zM9.75 9h4v1h-1.5v5h-1v-5h-1.5zm8 0h-3.5v6h3.5v-1h-2.5v-1.5h2.5v-1h-2.5V10h2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Datev;
