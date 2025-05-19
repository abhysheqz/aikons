import React from "react";
const Rocket: React.FC<
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
        d="M4.47 7.47A.75.75 0 0 1 5 7.25h4.855l1.789-1.789c.57-.57 1.007-1.007 1.392-1.364L15.939 7l-1.47 1.47 1.06 1.06L17 8.06l2.903 2.904c-.357.384-.794.821-1.364 1.391l-1.788 1.788V19a.75.75 0 0 1-.22.53l-3 3a.75.75 0 0 1-1.22-.234l-1.305-3.046H8.5a.75.75 0 0 1-.53-.22l-2.999-3a.75.75 0 0 1-.22-.53v-2.505L1.705 11.69a.75.75 0 0 1-.235-1.22zM20.855 9.795l-6.65-6.651a10.65 10.65 0 0 1 4.418-1.766c.817-.128 1.78-.128 3.3-.128h.076a.75.75 0 0 1 .75.75v.077c0 1.52 0 2.482-.127 3.3a10.65 10.65 0 0 1-1.767 4.418"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m1.627 12.96 1.666-1.667 1.415 1.413-1.666 1.668zm8 8 1.666-1.667 1.415 1.413-1.666 1.668z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rocket;
