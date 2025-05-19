import React from "react";
const Balloons: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15.5 6.5c0 2.485-1.567 4.5-3.5 4.5S8.5 8.985 8.5 6.5 10.067 2 12 2s3.5 2.015 3.5 4.5ZM22 15.5c0 2.485-1.567 4.5-3.5 4.5S15 17.985 15 15.5s1.567-4.5 3.5-4.5 3.5 2.015 3.5 4.5ZM11.998 11.5s.654 2 0 4C10.401 20.383 12 22 12 22M18.5 20c0 .5-.1 1.6-.5 2M2 15.5C2 17.985 3.567 20 5.5 20S9 17.985 9 15.5 7.433 11 5.5 11 2 13.015 2 15.5ZM5.5 20c0 .5.1 1.6.5 2"
      />
    </svg>
  );
};
export default Balloons;
