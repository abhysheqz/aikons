import React from "react";
const Stairs_04: React.FC<
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
        d="M8 5.25a.75.75 0 0 0-.75.75v.75a.5.5 0 0 0 .5.5h8.5a.5.5 0 0 0 .5-.5V6a.75.75 0 0 0-.75-.75zM18.25 10.75H5.75a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h12.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5M3.75 12.25h16.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3.75a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M1.25 16.25V18c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-1.75a.5.5 0 0 0-.5-.5H1.75a.5.5 0 0 0-.5.5"
      />
    </svg>
  );
};
export default Stairs_04;
