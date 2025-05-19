import React from "react";
const SolarPanel_01: React.FC<
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
        d="M11.999 14.75a1 1 0 0 1 1 1v3h2a1 1 0 0 1 0 2h-6a1 1 0 1 1 0-2h2v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.907 16.75h3.812a1.75 1.75 0 0 0 1.698-2.174l-.956-3.826h-5.646zm-1.365-7.5h5.544l-1.169-4.674a1.75 1.75 0 0 0-1.698-1.326h-3.77zm-2.617-6 1.092 6H9.994l1.093-6zm-3.363 0H5.78a1.75 1.75 0 0 0-1.698 1.326L2.914 9.25H8.47zm-1.365 7.5H2.539l-.956 3.826a1.75 1.75 0 0 0 1.698 2.174h3.823zm.432 6h6.754l-1.093-6H9.721z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SolarPanel_01;
