import React from "react";
const MapsEditing: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 10.749v-5h-7L8.012 2.75 2 5.832v13.917l6.012-2L11 19.032M8 2.75v15M15 5.75v7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 20.746H14v-2.5l5.494-5.493a.01.01 0 0 1 .015 0l2.486 2.486a.01.01 0 0 1 0 .014z"
      />
    </svg>
  );
};
export default MapsEditing;
