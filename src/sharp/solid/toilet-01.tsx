import React from "react";
const Toilet_01: React.FC<
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
        d="M11 7.75H6v-1.5h5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 22v-8.25H4a.75.75 0 0 1-.75-.75V2A.75.75 0 0 1 4 1.25h4a.75.75 0 0 1 .75.75v8.25h12V11a6.75 6.75 0 0 1-10.126 5.846l-.75 1.299A8.2 8.2 0 0 0 14 19.25c.81 0 1.592-.117 2.332-.334q.038.226.12.446c.297.79 1.02 1.536 1.883 1.967A.75.75 0 0 1 18 22.75H6a.75.75 0 0 1-.75-.75m-.5-9.75v-9.5h2.5v9.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Toilet_01;
