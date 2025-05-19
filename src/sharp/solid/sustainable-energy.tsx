import React from "react";
const SustainableEnergy: React.FC<
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
        d="M12 3.5a8.5 8.5 0 0 0-1.89.21l-.442-1.95c.75-.17 1.532-.26 2.332-.26 5.799 0 10.5 4.701 10.5 10.5 0 2.65-.982 5.07-2.6 6.917h1.6v2h-5.247V16h2v1.758A8.5 8.5 0 0 0 12 3.5M7.722 8h-2V6.27a8.5 8.5 0 0 0 8.168 14.02l.442 1.95c-.75.17-1.532.26-2.332.26-5.799 0-10.5-4.701-10.5-10.5 0-2.642.976-5.056 2.586-6.9H2.5v-2h5.222z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.893 6.754 10.92 11h6l-5.175 7.393-1.639-1.147L13.08 13h-6l5.175-7.393z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SustainableEnergy;
