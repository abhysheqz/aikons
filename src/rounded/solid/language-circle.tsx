import React from "react";
const LanguageCircle: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M11.5 6.25a.75.75 0 0 1 .75.75v.63H17a.75.75 0 0 1 0 1.5h-1.947c-.539 1.6-1.44 3.099-2.454 4.435l1.477 1.536a.75.75 0 1 1-1.08 1.04l-1.349-1.402a34 34 0 0 1-2.746 2.813.75.75 0 0 1-1.016-1.104 32 32 0 0 0 2.75-2.834 24 24 0 0 1-.68-.898c-.338-.467-.666-.961-.828-1.308a.75.75 0 1 1 1.36-.634c.095.205.346.596.684 1.065.135.188.279.38.422.566.762-1.037 1.418-2.14 1.864-3.276H7a.75.75 0 0 1 0-1.5h3.75V7a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LanguageCircle;
