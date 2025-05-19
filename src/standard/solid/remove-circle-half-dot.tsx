import React from "react";
const RemoveCircleHalfDot: React.FC<
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
        d="M11 2.25a1 1 0 0 1 1-1c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a1 1 0 1 1 2 0A8.75 8.75 0 1 0 12 3.25a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.666 2.35a1 1 0 0 1-.516 1.316 10.6 10.6 0 0 0-2.123 1.24 1 1 0 1 1-1.2-1.6A12.6 12.6 0 0 1 8.35 1.835a1 1 0 0 1 1.316.516m-4.96 3.277a1 1 0 0 1 .2 1.4 10.6 10.6 0 0 0-1.24 2.123 1 1 0 1 1-1.832-.8 12.6 12.6 0 0 1 1.473-2.524 1 1 0 0 1 1.4-.199M17.25 12.25a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RemoveCircleHalfDot;
