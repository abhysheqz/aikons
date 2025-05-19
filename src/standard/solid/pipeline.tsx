import React from "react";
const Pipeline: React.FC<
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
        d="M3.7 2C2.175 2 1.211 3.638 1.952 4.971L3.634 8h16.733l1.682-3.029C22.79 3.638 21.826 2 20.301 2zm15.556 8H4.746l1.666 3H17.59zm-2.778 5H7.523l2.73 4.912c.761 1.372 2.734 1.372 3.496 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pipeline;
