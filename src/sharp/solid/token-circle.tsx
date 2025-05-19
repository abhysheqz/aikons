import React from "react";
const TokenCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m.432 6.418L12 6.5l-.432 1.168a6.6 6.6 0 0 1-3.9 3.9L6.5 12l1.168.432a6.6 6.6 0 0 1 3.9 3.9L12 17.5l.432-1.168a6.6 6.6 0 0 1 3.9-3.9L17.5 12l-1.168-.432a6.6 6.6 0 0 1-3.9-3.9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TokenCircle;
