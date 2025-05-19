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
        d="M8.75 13a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 7q0-.31-.036-.62A7.7 7.7 0 0 1 12 5.248c2.15 0 4.096.875 5.5 2.29v10.925a7.73 7.73 0 0 1-5.5 2.289 7.74 7.74 0 0 1-6-2.843v-7.38c.264-.14.519-.314.756-.528C7.613 9.226 8 8.145 8 7m4 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20 3.25A2.75 2.75 0 0 1 22.75 6v7.75h-2.5v7h-1.5V3.25zM2.083 9.074c.338.306.742.496 1.167.594V20.75h1.5V9.668a2.6 2.6 0 0 0 1.167-.594C6.465 8.579 6.75 7.86 6.75 7c0-.836-.266-1.723-.7-2.416C5.632 3.918 4.934 3.25 4 3.25s-1.632.668-2.05 1.334c-.434.693-.7 1.58-.7 2.416 0 .861.285 1.579.833 2.074"
      />
    </svg>
  );
};
export default SpoonAndKnife;
