import React from "react";
const Package_03: React.FC<
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
        d="m12 1.248 9.75 4.305v12.89L12 22.748l-9.75-4.305V5.553zM8.25 9.171l3 1.325v10.29l-7.5-3.311V7.184l3 1.325v2.741h1.5zm.981-1.198L12 9.196l7.153-3.159L15.94 4.62zM7.45 7.187l6.71-3.355L12 2.88 4.847 6.037zM8.5 18 5 16.5v-3L8.5 15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Package_03;
