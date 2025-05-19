import React from "react";
const HandPointingLeft_02: React.FC<
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
        strokeWidth={1.5}
        d="M15.03 7.416H10.5m0 0H4.25a1.75 1.75 0 1 0 0 3.5H9.5V16.5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8l-3.857-2.513c-1.328-.871-1.942-.97-2.613-.986a3 3 0 0 0-.895.115c-.646.184-1.19.66-2.28 1.614z"
      />
    </svg>
  );
};
export default HandPointingLeft_02;
