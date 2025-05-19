import React from "react";
const Mail_01: React.FC<
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
        d="M1.25 6.167A2.924 2.924 0 0 1 4.182 3.25h15.636a2.924 2.924 0 0 1 2.932 2.917v11.666a2.924 2.924 0 0 1-2.932 2.917H4.182a2.924 2.924 0 0 1-2.932-2.917zm2.932 12.638a.975.975 0 0 1-.977-.972V8.712l7.484 3.723c.825.41 1.797.41 2.622 0l7.485-3.723v9.121a.975.975 0 0 1-.978.973z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mail_01;
