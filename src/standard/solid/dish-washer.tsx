import React from "react";
const DishWasher: React.FC<
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
        d="M4 1.25A2.75 2.75 0 0 0 1.25 4v3.25h21.5V4A2.75 2.75 0 0 0 20 1.25zm18.75 7.5H1.25V20A2.75 2.75 0 0 0 4 22.75h16A2.75 2.75 0 0 0 22.75 20zM4.25 4.412a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m15.75 0a1 1 0 1 0-2 0 1 1 0 1 0 2 0M9 12.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M5.25 15a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m10.005-3.736a.848.848 0 0 0-.997.835v3.4l-.008 2.498a.75.75 0 1 0 1.5.005l.006-1.752h1.643a.85.85 0 0 0 .838-1l-.34-1.908c-.053-.3-.17-.727-.507-1.067-.68-.687-1.68-.93-2.135-1.011"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DishWasher;
