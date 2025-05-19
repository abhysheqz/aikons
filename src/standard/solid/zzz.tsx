import React from "react";
const Zzz: React.FC<
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
        d="M3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 .753 1.659L6.203 11H11a1 1 0 1 1 0 2H4a1 1 0 0 1-.753-1.658L8.797 5H4a1 1 0 0 1-1-1m3 13a1 1 0 1 1 0-2h4a1 1 0 0 1 .707 1.707L8.414 19H10a1 1 0 1 1 0 2H6a1 1 0 0 1-.707-1.707L7.586 17zm7-8a1 1 0 0 0 1 1h3.586l-4.293 4.293A1 1 0 0 0 14 16h6a1 1 0 1 0 0-2h-3.586l4.293-4.293A1 1 0 0 0 20 8h-6a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Zzz;
