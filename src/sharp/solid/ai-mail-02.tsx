import React from "react";
const AiMail_02: React.FC<
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
        d="M1.25 2.25h21.5v10.773h-1.954v-4.92L12 12.5 3.205 8.102v10.7h9.821v1.948H1.25z"
      />
      <path
        fill="currentColor"
        d="M18.299 14.25H19.7l.258.695c.36.976.476 1.24.666 1.43s.454.305 1.43.666l.695.258V18.7l-.695.258c-.976.36-1.24.476-1.43.666s-.305.454-.666 1.43l-.258.695H18.3l-.258-.695c-.36-.976-.476-1.24-.666-1.43s-.454-.305-1.43-.666l-.695-.258V17.3l.695-.258c.976-.36 1.24-.476 1.43-.666s.305-.454.666-1.43z"
      />
    </svg>
  );
};
export default AiMail_02;
