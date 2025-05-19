import React from "react";
const MoonCloud: React.FC<
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
        d="M1.25 16.5a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938A5.251 5.251 0 0 1 17.5 22.25H7a5.75 5.75 0 0 1-5.75-5.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.185 7.317c.052.45.194.897.434 1.315a3.38 3.38 0 0 0 2.9 1.709l-.02 1.909a5.29 5.29 0 0 1-4.54-2.67 5.35 5.35 0 0 1-.547-3.97.955.955 0 0 1 1.508-.527c.754.575 1.8.67 2.665.167a2.46 2.46 0 0 0 1.196-2.429.954.954 0 0 1 1.212-1.034 5.3 5.3 0 0 1 3.147 2.468c.299.522.5 1.075.61 1.638l-1.877.364a3.44 3.44 0 0 0-1.29-2.078 4.34 4.34 0 0 1-2.035 2.72 4.3 4.3 0 0 1-3.363.418"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoonCloud;
