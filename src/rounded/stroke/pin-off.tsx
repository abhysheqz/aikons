import React from "react";
const PinOff: React.FC<
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
        d="M7.5 8c-.541.128-1 .142-1.507.459-.92.575-1.142 1.258-.905 2.302.852 3.753 4.398 7.299 8.15 8.15 1.045.238 1.728.017 2.304-.903.3-.48.33-1 .458-1.508M12 7.8c.178-.022.318-.06.43-.118.97-.505 1.5-2.148 2.02-3.082.481-.863.722-1.294 1.288-1.498s.907-.08 1.588.166a5.64 5.64 0 0 1 3.406 3.406c.246.681.37 1.022.166 1.588s-.635.807-1.498 1.288c-.94.524-2.605 1.06-3.11 2.04a1.2 1.2 0 0 0-.113.41M3 21l5-5M3 3l18 18"
      />
    </svg>
  );
};
export default PinOff;
