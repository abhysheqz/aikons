import React from "react";
const PresentationOnline: React.FC<
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
        d="M12 3.784a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m6.132 6.425c-1.568-2.28-5.214-2.188-6.77.009a.75.75 0 0 1-1.224-.867c2.121-2.995 7.035-3.185 9.23.008a.75.75 0 0 1-1.236.85M2 21.784a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.923 13.284c-1.84 0-3.073 1.832-2.553 3.562l1.201 4c.342 1.136 1.365 1.938 2.554 1.938h7.748c1.189 0 2.212-.802 2.554-1.938l1.201-4c.52-1.73-.713-3.562-2.553-3.562zm4.077 3a.75.75 0 1 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationOnline;
