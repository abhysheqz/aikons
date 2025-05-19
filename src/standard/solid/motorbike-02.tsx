import React from "react";
const Motorbike_02: React.FC<
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
        d="M15.862 4.508a1 1 0 0 1 1.363-.379c1.671.944 2.899 2.031 3.782 3.106 1.393 1.695 1.94 3.378 1.99 4.412a1 1 0 0 1-1.414.958 4.3 4.3 0 0 0-1.801-.388c-.998 0-2.096.37-2.93 1.044-.817.661-1.353 1.586-1.353 2.739a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1c0-2.327-1.922-4-4.499-4a1 1 0 0 1-.555-.168l-2-1.334A1 1 0 0 1 1 9.666V8a1 1 0 0 1 1.204-.979l7.63 1.588.607-.35c1.4-.948 3.765-1.955 6.219-1.078l.883.283.735-.17a12.4 12.4 0 0 0-2.037-1.423 1 1 0 0 1-.379-1.363"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M16 16.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M4.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M1 16.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Motorbike_02;
