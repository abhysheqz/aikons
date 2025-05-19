import React from "react";
const NewTwitterEllipse: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M5.94 17 7 18.06l4.101-4.1 2.738 3.79h4.628l-4.679-6.478L18.061 7 17 5.94l-4.101 4.1-2.738-3.79H5.533l4.679 6.478z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NewTwitterEllipse;
