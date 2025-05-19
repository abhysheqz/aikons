import React from "react";
const SpoonAndKnife: React.FC<
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
        d="M12 5.25c-1.479 0-2.86.414-4.036 1.132Q8 6.692 8 7c0 1.145-.387 2.226-1.244 3a3.7 3.7 0 0 1-.756.528v7.378a7.74 7.74 0 0 0 6 2.844c2.15 0 4.096-.876 5.5-2.29V7.54A7.73 7.73 0 0 0 12 5.25M8.75 13a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12 8.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.75 4a.75.75 0 0 1 .75-.75h.5A2.75 2.75 0 0 1 22.75 6v7a.75.75 0 0 1-.75.75h-1.75V20a.75.75 0 0 1-1.5 0zM2.083 9.074c.338.306.742.496 1.167.594V20a.75.75 0 0 0 1.5 0V9.668a2.6 2.6 0 0 0 1.167-.594C6.465 8.579 6.75 7.86 6.75 7c0-.836-.266-1.723-.7-2.416C5.632 3.918 4.934 3.25 4 3.25s-1.632.668-2.05 1.334c-.434.693-.7 1.58-.7 2.416 0 .861.285 1.579.833 2.074"
      />
    </svg>
  );
};
export default SpoonAndKnife;
