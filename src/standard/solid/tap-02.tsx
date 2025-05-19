import React from "react";
const Tap_02: React.FC<
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
        d="m6.379 18.33-.073-.084a5.05 5.05 0 0 1-.612-.957c-.304-.624-.586-1.54-.365-2.578.26-1.215 1.187-2.073 1.92-2.59a8 8 0 0 1 1.001-.6V6.5a2.25 2.25 0 1 1 4.5 0v4.264c1.52.08 3.611.52 5.224 2.181.815.84.854 2.053.712 3.028-.147 1.004-.52 1.996-.83 2.662l-.61 1.511V22a.75.75 0 0 1-.75.75H8.97a.75.75 0 0 1-.75-.75v-1.704l-1.837-1.96z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.5 2.75A3.25 3.25 0 0 0 7.25 6a.75.75 0 0 1-1.5 0 4.75 4.75 0 0 1 9.5 0 .75.75 0 0 1-1.5 0 3.25 3.25 0 0 0-3.25-3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tap_02;
