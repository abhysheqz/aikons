import React from "react";
const Printer3d: React.FC<
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
        d="M12.75 19.25V20A2.75 2.75 0 0 1 10 22.75H1.25v-1.5H10c.69 0 1.25-.56 1.25-1.25v-.75zM7.25 1.25h9.5V10h-9.5zM8.274 11.5l1.476 1.771v2.54L12 18.06l2.25-2.25v-2.54l1.476-1.771zm6.476-7.25v1.51h-1.5V4.25zm0 4.01V6.75h-1.5v1.51z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M6 1.25H1.25v4H6zM18 5.25h4.75v-4H18z" />
    </svg>
  );
};
export default Printer3d;
