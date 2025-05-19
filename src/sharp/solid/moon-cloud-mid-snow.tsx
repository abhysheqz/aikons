import React from "react";
const MoonCloudMidSnow: React.FC<
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
        d="M11 18.009V16.25h2v1.759l1.496-.873 1.008 1.728-1.52.886 1.52.886-1.008 1.728L13 21.49v1.759h-2v-1.759l-1.496.873-1.008-1.728 1.52-.886-1.52-.886 1.008-1.728z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.001 10.593A5.348 5.348 0 0 1 1.412 4.61a.955.955 0 0 1 1.508-.527c.754.575 1.8.67 2.665.167a2.46 2.46 0 0 0 1.196-2.429A.954.954 0 0 1 7.993.787a5.3 5.3 0 0 1 3.147 2.468c.274.48.467.986.582 1.501a6.25 6.25 0 0 1 6.525 6.047A5.251 5.251 0 0 1 17.5 21.25h-.617l.673-1.5-2.693-5H9.107l-2.772 5 .783 1.5H7a5.75 5.75 0 0 1-2.999-10.657m-.384-2.961a3.4 3.4 0 0 1-.433-1.315c1.09.314 2.302.2 3.363-.418a4.34 4.34 0 0 0 2.035-2.72A3.445 3.445 0 0 1 9.845 5.13a6.27 6.27 0 0 0-3.86 4.162 3.38 3.38 0 0 1-2.368-1.661"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoonCloudMidSnow;
