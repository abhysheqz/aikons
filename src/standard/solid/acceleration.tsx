import React from "react";
const Acceleration: React.FC<
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
        d="M15.191 10.412a1 1 0 0 1 1.397-.22l2.945 2.141.653-.914a1 1 0 0 1 1.8.417l.5 3a1 1 0 0 1-.822 1.15l-3 .5a1 1 0 0 1-.978-1.567l.685-.958-2.96-2.152a1 1 0 0 1-.22-1.397M2.25 10.843c0-1.389 1.54-2.224 2.704-1.468L20.58 19.533c1.46.95.789 3.217-.953 3.217H4A1.75 1.75 0 0 1 2.25 21z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 7a5 5 0 1 1 10 0A5 5 0 0 1 4 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Acceleration;
