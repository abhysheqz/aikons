import React from "react";
const Ipod: React.FC<
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
        d="M3.75 4A2.75 2.75 0 0 1 6.5 1.25h11A2.75 2.75 0 0 1 20.25 4v5.25H3.75zm0 6.75V20a2.75 2.75 0 0 0 2.75 2.75h11A2.75 2.75 0 0 0 20.25 20v-9.25zM9 15.706a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ipod;
