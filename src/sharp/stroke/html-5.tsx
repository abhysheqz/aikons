import React from "react";
const Html_5: React.FC<
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
        d="M15.48 8.026h-6.5l.5 4.014h5l-.5 2.986-2 1-2-1-.112-.556"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.489 3.001H3.511a.01.01 0 0 0-.01.012L5.047 17.03l6.984 3.967a.01.01 0 0 0 .01 0l6.93-3.985 1.528-14a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default Html_5;
