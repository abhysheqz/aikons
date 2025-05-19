import React from "react";
const Legal_02: React.FC<
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
        d="M13.871 17.89a2 2 0 0 1 1.664-.89h2.93a2 2 0 0 1 1.664.89L21.535 20H22a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2h.465zM12.25 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-.114a31.5 31.5 0 0 1 0 9.5H21a.75.75 0 0 1 0 1.5h-8a.75.75 0 1 1 0-1.5h.114a31.4 31.4 0 0 1-.364-4.75c0-1.589.123-3.177.364-4.75H13a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.328 10.742a32.5 32.5 0 0 1 0-4.489l-6.882-.497C2.805 5.638 1.25 6.816 1.25 8.498c0 1.68 1.555 2.86 3.196 2.741z"
      />
    </svg>
  );
};
export default Legal_02;
