import React from "react";
const Python: React.FC<
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
        d="M16.249 2.25h-8.5v4.5H12.5v1H2.248v8.5H6.75V11.5h9.5V7.75h-.001zm1.001 5.5v4.75h-9.5V18h-.001v3.75h8.5v-4.5H11.5v-1h10.248v-8.5zm-6.25-4v1.51H9.5V3.75zm3.5 16.5v-1.51H13v1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Python;
