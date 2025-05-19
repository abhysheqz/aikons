import React from "react";
const Knife_02: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.502 18.568c-.713.729-.677 1.857 0 2.62.773.872 2.104.605 2.86-.281l3.383-3.954 1.356-1.483 2.095 2.068c.201.198.524.192.717-.015l6.367-6.83c2.809-3.17 1.595-6.045.215-7.796a.48.48 0 0 0-.71-.038z"
      />
    </svg>
  );
};
export default Knife_02;
