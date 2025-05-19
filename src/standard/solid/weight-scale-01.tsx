import React from "react";
const WeightScale_01: React.FC<
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
        d="M3.339 1.646A.75.75 0 0 1 4 1.25h16a.75.75 0 0 1 .624 1.166l-1.11 1.664a3.75 3.75 0 0 1-3.12 1.67H7.606a3.75 3.75 0 0 1-3.12-1.67l-1.11-1.664a.75.75 0 0 1-.037-.77M12 7.25A7.75 7.75 0 0 0 4.25 15v6c0 .966.784 1.75 1.75 1.75h12A1.75 1.75 0 0 0 19.75 21v-6A7.75 7.75 0 0 0 12 7.25M8.75 15a3.25 3.25 0 0 1 6.5 0 .75.75 0 0 0 1.5 0 4.75 4.75 0 1 0-9.5 0 .75.75 0 0 0 1.5 0m4.374-.584a.75.75 0 1 0-1.248-.832l-1 1.5a.75.75 0 1 0 1.248.832z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 5v3H9V5zm4 0v3h-2V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WeightScale_01;
