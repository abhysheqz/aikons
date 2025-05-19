import React from "react";
const DashboardCircleEdit: React.FC<
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
        d="M2.25 6.75a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M12.75 17.25a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M2.25 17.25a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M18.695 2.25l3.055 3.055-5.181 5.181-3.819.764.764-3.819z"
      />
    </svg>
  );
};
export default DashboardCircleEdit;
