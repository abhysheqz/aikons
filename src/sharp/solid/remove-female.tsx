import React from "react";
const RemoveFemale: React.FC<
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
        d="m7.73 15.25-5.906 1.5-.094 3.5h11v-7.155c1.285-.163 2.47-.448 3.5-.829-.333-.656-1-2.558-1-4.92 0-2.951 0-5.411-3-4.92-1.5-1.967-7-1.967-7 3.937 0 3.443-.5 4.92-1 5.903 1.03.381 2.216.666 3.5.829z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.836 14.922 2.5 2.5 2.5-2.5 1.414 1.414-2.5 2.5 2.5 2.5-1.414 1.414-2.5-2.5-2.5 2.5-1.414-1.414 2.5-2.5-2.5-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RemoveFemale;
