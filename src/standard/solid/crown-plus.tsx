import React from "react";
const CrownPlus: React.FC<
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
        d="M18.5 1.25a1 1 0 0 1 1 1v1.5H21a1 1 0 1 1 0 2h-1.5v1.5a1 1 0 1 1-2 0v-1.5H16a1 1 0 1 1 0-2h1.5v-1.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.25c-.578 0-1.116.305-1.408.808l-3.35 5.882L3.96 8.819a1.76 1.76 0 0 0-2.194.217 1.72 1.72 0 0 0-.425 1.78l2.951 8.432c.106.3.39.502.708.502h14a.75.75 0 0 0 .708-.502l2.949-8.423.002-.008a1.72 1.72 0 0 0-.425-1.78 1.76 1.76 0 0 0-2.194-.218l-.003.002-3.278 2.119-3.348-5.877-.003-.005A1.63 1.63 0 0 0 12 4.25m-7 16.5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CrownPlus;
