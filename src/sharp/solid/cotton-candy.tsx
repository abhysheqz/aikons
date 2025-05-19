import React from "react";
const CottonCandy: React.FC<
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
        d="M15.674 2.824q.082.082.16.17.075-.088.158-.17a3.665 3.665 0 0 1 5.202 5.166l-.006.019a.5.5 0 0 0-.022.158.5.5 0 0 0 .028.178 3.666 3.666 0 0 1-1.93 6.177 4.152 4.152 0 0 1-7.55 2.863 3.667 3.667 0 0 1-5.097-5.097 4.153 4.153 0 0 1 1.96-7.568c.19-.017.436-.113.68-.291.24-.177.422-.396.515-.59a3.666 3.666 0 0 1 5.902-1.015"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.073 16.985 2.807 22.25 1.75 21.193l5.265-5.265z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CottonCandy;
