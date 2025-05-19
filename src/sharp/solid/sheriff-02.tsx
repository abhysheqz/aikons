import React from "react";
const Sheriff_02: React.FC<
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
        d="M12.592 1.54a.75.75 0 0 0-1.184 0L8.133 5.75H3a.75.75 0 0 0-.683 1.06L4.677 12l-2.36 5.19A.75.75 0 0 0 3 18.25h5.133l3.275 4.21a.75.75 0 0 0 1.184 0l3.275-4.21H21a.75.75 0 0 0 .683-1.06L19.323 12l2.36-5.19A.75.75 0 0 0 21 5.75h-5.133zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sheriff_02;
