import React from "react";
const EraserAdd: React.FC<
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
        d="M1.25 4A.75.75 0 0 1 2 3.25h15.416l5.22 8.353a.75.75 0 0 1 0 .795l-5.22 8.352H2a.75.75 0 0 1-.75-.75zM10 8v3H7v2h3v3h2v-3h3v-2h-3V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EraserAdd;
