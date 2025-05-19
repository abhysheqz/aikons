import React from "react";
const Zip_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14.5 13.999v5M12 19H9v-.498l3-4v-.502H9m8 3v-3h2a1.5 1.5 0 0 1 0 3zm0 0v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19.5 22h-16V2h9l7 7v2m-7-8.5V9H19"
      />
    </svg>
  );
};
export default Zip_02;
