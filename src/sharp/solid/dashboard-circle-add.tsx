import React from "react";
const DashboardCircleAdd: React.FC<
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
        d="M2.25 6.75a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M12.75 17.25a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0M2.25 17.25a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 2.25v3.5h3.5v2h-3.5v3.5h-2v-3.5h-3.5v-2h3.5v-3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DashboardCircleAdd;
