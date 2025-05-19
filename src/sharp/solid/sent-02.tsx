import React from "react";
const Sent_02: React.FC<
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
        d="M19.014 18.765 22.5 2 2 11.793l4.961 2.15 9.5-6.207-7.75 6.908V22.5l4.789-6z"
      />
    </svg>
  );
};
export default Sent_02;
