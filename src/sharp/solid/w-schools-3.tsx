import React from "react";
const WSchools_3: React.FC<
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
        d="M6 8.5H2l6 10 4.5-7 4.5 7 2-3.5-4-6.5h-5l-2 3z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 6.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .53 1.28l-.98.98A2.25 2.25 0 0 1 19.75 12c-.932 0-1.883-.583-2.207-1.5a.75.75 0 1 1 1.414-.5c.088.248.42.5.793.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 1-.53-1.28l.72-.72h-1.19a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WSchools_3;
