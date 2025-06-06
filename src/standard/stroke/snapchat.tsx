import React from "react";
const Snapchat: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 16.5c3.824-2.5 3.824-4.96.956-8.5M22 16.5c-3.824-2.5-3.824-4.96-.956-8.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.576 7.424a5.424 5.424 0 0 1 10.848 0c0 4.748.237 7.122 4.576 9.02-2.222.556-2.944.834-3.5 3.056-3.889 0-4.278 2.5-6.5 2.5s-2.611-2.5-6.5-2.5c-.556-2.222-1.278-2.444-3.5-3 4.339-1.899 4.576-4.328 4.576-9.076"
      />
    </svg>
  );
};
export default Snapchat;
