import React from "react";
const RubElHizb: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.31 3.75-2.28-2.28a.75.75 0 0 0-1.06 0L9.69 3.75H5a.75.75 0 0 0-.75.75v4.69l-2.28 2.28a.75.75 0 0 0 0 1.06l2.28 2.28v4.69c0 .414.336.75.75.75h4.69l2.28 2.28a.75.75 0 0 0 1.06 0l2.28-2.28H20a.75.75 0 0 0 .75-.75v-4.69l2.28-2.28a.75.75 0 0 0 0-1.06l-2.28-2.28V4.5a.75.75 0 0 0-.75-.75zm1.502 1.5h2.44v2.44zm3.94 6.06.69.69-.69.69zm-1.5 5v2.44h-2.44zm-11.06 2.44h-2.44v-2.44zm5 1.5-.69.69-.69-.69zm-8.94-7.56-.69-.69.69-.69zm1.5-5V5.25h2.44zm6.06-3.94.69-.69.69.69zM12.5 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RubElHizb;
