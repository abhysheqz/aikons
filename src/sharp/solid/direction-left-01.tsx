import React from "react";
const DirectionLeft_01: React.FC<
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
        d="M14.5 19.5v-7.252l-6.357-.01L4.5 7.988l3.643-4.25 6.357.01V2.5h2v17h3v2h-8v-2z"
      />
    </svg>
  );
};
export default DirectionLeft_01;
