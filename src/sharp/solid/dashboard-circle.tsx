import React from "react";
const DashboardCircle: React.FC<
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
        d="M12.75 6.75a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M2.25 6.75a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M12.75 17.25a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M2.25 17.25a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"
      />
    </svg>
  );
};
export default DashboardCircle;
