import React from "react";
const ThumbsUp: React.FC<
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
        d="M14.53 2.97a.75.75 0 0 0-1.062.001L6.736 9.75H2.25c-.552 0-1 .429-1 .958v9.584c0 .529.448.958 1 .958h17.307l3.161-10.485A.75.75 0 0 0 22 9.8h-6.495l1.214-4.085a.75.75 0 0 0-.189-.744zM6.25 19.333v-7.666h-3v7.666z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThumbsUp;
