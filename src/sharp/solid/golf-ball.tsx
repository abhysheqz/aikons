import React from "react";
const GolfBall: React.FC<
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
        d="M12 1.75a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5M10.008 8.5a1 1 0 1 0 0-2h-.01a1 1 0 1 0 0 2zM11 22.25c0-1.74-1.225-2.4-2-2.4v-1.6c1.2 0 2.27.489 3 1.303.73-.814 1.8-1.303 3-1.303v1.6c-.775 0-2 .66-2 2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GolfBall;
