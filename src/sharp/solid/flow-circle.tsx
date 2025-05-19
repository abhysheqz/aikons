import React from "react";
const FlowCircle: React.FC<
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
        d="M12.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12.25 19.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M1.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 5.5h6v-2H6a1 1 0 0 0-1 1V8h2zm11-2h4v2h-4zm-13 16V16h2v2.5h6v2H6a1 1 0 0 1-1-1m13-1h4v2h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlowCircle;
