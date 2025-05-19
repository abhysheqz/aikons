import React from "react";
const NotEqualSignSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm10.874 6.236a1 1 0 0 0-1.748-.972L12.523 9H7.5a1 1 0 0 0 0 2h3.912L10.3 13H7.5a1 1 0 1 0 0 2h1.69l-.564 1.014a1 1 0 1 0 1.748.972L11.477 15H16.5a1 1 0 0 0 0-2h-3.912l1.112-2h2.8a1 1 0 0 0 0-2h-1.69z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotEqualSignSquare;
