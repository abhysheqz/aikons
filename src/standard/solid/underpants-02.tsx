import React from "react";
const Underpants_02: React.FC<
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
        d="M3.326 6.21A2.75 2.75 0 0 1 6.023 4h12.72c1.311 0 2.44.925 2.697 2.21l.158.79H3.168zM2.868 8.5l-.814 4.07a2.75 2.75 0 0 0 2.24 3.252l2.701.455L9.468 8.5zm8.174 0-2.71 8.525.831 1.247a2.75 2.75 0 0 0 2.285 1.225l1.859.002a2.75 2.75 0 0 0 2.289-1.222l.586-.877v-.002L13.706 8.5zm4.221 0 2.18 7.832 3.03-.51a2.75 2.75 0 0 0 2.239-3.251L21.898 8.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Underpants_02;
