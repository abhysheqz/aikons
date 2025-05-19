import React from "react";
const FrenchFries_01: React.FC<
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
        d="m8.25 2.75-.356 3.557 5.062 1.898.794-5.955-2.5-1-.4 3zM16.428 9.507l-2.519-.944 1.84-3.313h3zM6.263 7.298a.75.75 0 0 0-.996.86l.986 4.601a3.25 3.25 0 1 1 1.277 5.957l.737 3.441a.75.75 0 0 0 1.277.359l9-9.5a.75.75 0 0 0-.28-1.218z"
      />
      <path fill="currentColor" d="M7.17 17.041a1.75 1.75 0 1 0-.559-2.607z" />
    </svg>
  );
};
export default FrenchFries_01;
