import React from "react";
const StarAward_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 15v7l4-3 4 3v-7M11.669 5.212a.365.365 0 0 1 .662 0l.814 1.668c.054.11.155.187.273.207l1.768.294c.3.05.42.434.205.658l-1.266 1.326a.4.4 0 0 0-.104.335l.279 1.85c.047.314-.266.551-.536.407l-1.595-.849a.36.36 0 0 0-.338 0l-1.595.849c-.27.144-.583-.093-.536-.407l.279-1.85a.4.4 0 0 0-.104-.335L8.609 8.04c-.214-.224-.095-.608.205-.658l1.768-.294a.37.37 0 0 0 .273-.207z"
      />
    </svg>
  );
};
export default StarAward_02;
