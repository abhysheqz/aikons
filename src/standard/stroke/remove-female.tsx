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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 21H2.5l.053-1.988a2 2 0 0 1 1.507-1.884L8.5 16v-2.155c-1.285-.163-2.47-.448-3.5-.829.5-.984 1-2.46 1-5.903 0-5.904 5.5-5.904 7-3.936 3-.492 3 1.968 3 4.92 0 2.36.666 4.263 1 4.92-1.03.38-2.215.665-3.5.828V16M16.5 22l2.5-2.5m0 0 2.5-2.5M19 19.5 16.5 17m2.5 2.5 2.5 2.5"
      />
    </svg>
  );
};
export default RemoveFemale;
