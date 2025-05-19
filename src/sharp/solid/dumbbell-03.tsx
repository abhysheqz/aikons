import React from "react";
const Dumbbell_03: React.FC<
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
        d="M5.5 11V3h2v8zm11 0V3h2v8zM5.5 21v-8h2v8zm11 0v-8h2v8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 6h2v2H1zm16.5 2h-11V6h11zM23 8h-2V6h2zM1 16h2v2H1zm16.5 2h-11v-2h11zm5.5 0h-2v-2h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 9.5v-5h2v5zm17 0v-5h2v5zM2.5 19.5v-5h2v5zm17 0v-5h2v5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dumbbell_03;
