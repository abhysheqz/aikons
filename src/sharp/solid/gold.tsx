import React from "react";
const Gold: React.FC<
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
        d="M3.288 15.263A.75.75 0 0 1 4 14.75h5a.75.75 0 0 1 .711.513l2 6a.75.75 0 0 1-.711.987H2a.75.75 0 0 1-.712-.987zM14.289 15.263A.75.75 0 0 1 15 14.75h5a.75.75 0 0 1 .711.513l2 6a.75.75 0 0 1-.711.987h-9a.75.75 0 0 1-.711-.987zM8.788 6.763A.75.75 0 0 1 9.5 6.25h5a.75.75 0 0 1 .711.513l2 6a.75.75 0 0 1-.711.987h-9a.75.75 0 0 1-.712-.987z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 3.75v-2h2v2zM8.293 5.457l-1.5-1.5 1.414-1.414 1.5 1.5zm6-1.414 1.5-1.5 1.414 1.414-1.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gold;
