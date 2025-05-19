import React from "react";
const Pin_02: React.FC<
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
        d="M12 16v5M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v.382a1 1 0 0 1-.553.894L14 7l1 5h1a2 2 0 0 1 2 2v2H6v-2a2 2 0 0 1 2-2h1l1-5-1.447-.724A1 1 0 0 1 8 5.382z"
      />
    </svg>
  );
};
export default Pin_02;
