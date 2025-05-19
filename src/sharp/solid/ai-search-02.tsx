import React from "react";
const AiSearch_02: React.FC<
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
        d="M15.035 2.75h1.403l.257.695c.361.976.476 1.24.666 1.43s.454.305 1.43.666l.695.258V7.2l-.695.258c-.976.36-1.24.476-1.43.665s-.305.455-.666 1.43l-.257.696h-1.403l-.257-.695c-.361-.976-.476-1.24-.666-1.43s-.455-.305-1.43-.666l-.696-.258V5.8l.695-.258c.976-.36 1.241-.476 1.43-.665.19-.19.306-.455.667-1.43z"
      />
      <path
        fill="currentColor"
        d="M3.25 11.353a7.603 7.603 0 0 1 7.603-7.603v1.9a5.702 5.702 0 1 0 5.702 5.703h1.9a7.57 7.57 0 0 1-1.596 4.662l3.891 3.891-1.344 1.344-3.891-3.891A7.603 7.603 0 0 1 3.25 11.353"
      />
    </svg>
  );
};
export default AiSearch_02;
