import React from "react";
const GoogleSheet: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M15.021 2.536v4.5h4.5" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.021 11.036v3m0 0v3m0-3h-4.5m4.5 0h4.5m-9 3h9v-6h-9z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 21.933V2.01A.01.01 0 0 1 4.01 2h10.98L20 7.02v14.97a.01.01 0 0 1-.01.009l-15.98-.056a.01.01 0 0 1-.01-.01Z"
      />
    </svg>
  );
};
export default GoogleSheet;
