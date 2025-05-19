import React from "react";
const UserStar_01: React.FC<
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
        d="M15 8A5 5 0 1 0 5 8a5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 20a7 7 0 0 1 10.5-6.063M18.105 14.506l.616 1.242a.76.76 0 0 0 .497.37l1.116.187c.714.12.882.642.367 1.157l-.867.875a.77.77 0 0 0-.183.64l.249 1.082c.196.858-.255 1.19-1.008.741l-1.046-.624a.75.75 0 0 0-.693 0l-1.047.624c-.749.448-1.204.113-1.008-.74l.249-1.084a.77.77 0 0 0-.182-.639l-.868-.875c-.51-.515-.346-1.037.368-1.157l1.116-.187a.76.76 0 0 0 .493-.37l.616-1.242c.336-.675.882-.675 1.215 0"
      />
    </svg>
  );
};
export default UserStar_01;
