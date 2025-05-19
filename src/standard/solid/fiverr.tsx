import React from "react";
const Fiverr: React.FC<
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
        d="M5.498 7.527H3.02a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2.978V21.5a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5v-9.973h4.5V21.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V8.027a.5.5 0 0 0-.5-.5h-9V5.516c0-.829 1.172-1.25 2-1.25h2a.5.5 0 0 0 .5-.5v-2.75a.5.5 0 0 0-.5-.5h-4a5 5 0 0 0-5 5z"
      />
    </svg>
  );
};
export default Fiverr;
