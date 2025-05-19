import React from "react";
const Robot_02: React.FC<
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
        d="M9.731 3.52a2.27 2.27 0 1 1 3.042 2.135v1.616a8.754 8.754 0 0 1 7.977 8.72v1.747h-5.358l-.997-1.496h-4.79l-.996 1.496H3.25v-1.746a8.754 8.754 0 0 1 7.977-8.721V5.655a2.27 2.27 0 0 1-1.496-2.134M20.75 19.236h-6.158l-.998-1.497h-3.188l-.997 1.497H3.25v3.516h17.5zM9.757 11.253v2.494H8.26v-2.494zm5.983 0v2.494h-1.496v-2.494z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Robot_02;
