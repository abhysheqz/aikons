import React from "react";
const Code: React.FC<
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
        d="M7 11h2.009v2H7zm3.996 0h2.008v2h-2.008zm3.995 0H17v2h-2.009zM18.5 5H17V3h2.5a1 1 0 0 1 1 1v5.667l1.3 1.733a1 1 0 0 1 0 1.2l-1.3 1.733V20a1 1 0 0 1-1 1H17v-2h1.5v-5.333L19.75 12l-1.25-1.667zM3.5 4a1 1 0 0 1 1-1H7v2H5.5v5.333L4.25 12l1.25 1.667V19H7v2H4.5a1 1 0 0 1-1-1v-5.667L2.2 12.6a1 1 0 0 1 0-1.2l1.3-1.733z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Code;
