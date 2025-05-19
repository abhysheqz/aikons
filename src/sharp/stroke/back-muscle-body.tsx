import React from "react";
const BackMuscleBody: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15.5 10A1.5 1.5 0 0 1 14 8.5M8.5 10A1.5 1.5 0 0 0 10 8.5M14 2v1a2 2 0 0 0 2 2h1a4 4 0 0 1 4 4v13M10 2v1a2 2 0 0 1-2 2H7a4 4 0 0 0-4 4v13M12 13v9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 11.5s-.545 2.864-.497 5.727V22M6 11.5s.545 2.864.497 5.727L6.5 22"
      />
    </svg>
  );
};
export default BackMuscleBody;
