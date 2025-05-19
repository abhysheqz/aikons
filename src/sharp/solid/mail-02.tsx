import React from "react";
const Mail_02: React.FC<
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
        d="M2 2.75a.75.75 0 0 0-.75.75v17c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-17a.75.75 0 0 0-.75-.75zm4.416 4.626-.832 1.248L12 12.901l6.416-4.277-.832-1.248L12 11.099z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mail_02;
