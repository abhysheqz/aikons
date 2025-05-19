import React from "react";
const PlayCircle_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.956 15.386C9.5 15.08 9.5 14.32 9.5 12.8v-1.6c0-1.52 0-2.28.456-2.586s1.079.032 2.326.712l1.468.8C15.25 10.944 16 11.353 16 12s-.75 1.056-2.25 1.874l-1.469.8c-1.246.68-1.87 1.02-2.325.712"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlayCircle_02;
