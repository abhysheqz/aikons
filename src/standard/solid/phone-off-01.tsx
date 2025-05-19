import React from "react";
const PhoneOff_01: React.FC<
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
        d="M1.543 1.543a1 1 0 0 1 1.414 0l19.5 19.5a1 1 0 0 1-1.414 1.414l-19.5-19.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.75 4.75v15.557c0 1.35 1.082 2.443 2.417 2.443h9.666c1.335 0 2.417-1.094 2.417-2.443V19.25l-1.933-1.933V19H6.683V6.683zM17.317 13.781V3.691a.486.486 0 0 0-.484-.488h-2.302l-.216.437a.97.97 0 0 1-.865.54h-2.9c-.366 0-.7-.209-.865-.54l-.216-.437H7.167a.48.48 0 0 0-.313.116L5.48 1.944a2.4 2.4 0 0 1 1.687-.694h9.666c1.335 0 2.417 1.094 2.417 2.443v12.022z"
      />
    </svg>
  );
};
export default PhoneOff_01;
