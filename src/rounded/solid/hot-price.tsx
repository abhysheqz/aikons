import React from "react";
const HotPrice: React.FC<
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
        d="M12.45 1.4c.433.325.91.731 1.294 1.067.766.67 1.79 1.63 2.817 2.785 2.017 2.27 4.189 5.452 4.189 8.748a8.75 8.75 0 1 1-17.5 0c0-3.296 2.172-6.479 4.19-8.748a.75.75 0 0 1 1.256.22c.25.623.412.942.612 1.177.098.115.218.224.39.338.903-1.719 1.224-2.942 1.561-5.103A.75.75 0 0 1 12.45 1.4M8.293 18.707a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0M9.01 11H9a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2m5.978 6a1 1 0 0 0 0 2H15a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HotPrice;
