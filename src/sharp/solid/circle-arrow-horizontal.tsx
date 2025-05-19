import React from "react";
const CircleArrowHorizontal: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1.47 8.28 1.72 1.72H8.81l1.72-1.72-1.06-1.06L5.94 12l3.53 3.53 1.06-1.06-1.72-1.72h6.38l-1.72 1.72 1.06 1.06L18.06 12l-3.53-3.53z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowHorizontal;
