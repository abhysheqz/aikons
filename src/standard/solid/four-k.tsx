import React from "react";
const FourK: React.FC<
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
        d="M4 2.25A2.75 2.75 0 0 0 1.25 5v14A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19V5A2.75 2.75 0 0 0 20 2.25zm7.25 6.247a.75.75 0 0 0-1.5.006l.012 2.742H7.75V8.5a.75.75 0 0 0-1.5 0v3.495c0 .414.336.75.75.75h2.762l-.012 2.752a.75.75 0 1 0 1.5.006l.015-3.505zm3 .004a.75.75 0 0 0-1.5-.002l-.006 3.465v.144l.006 3.393a.75.75 0 0 0 1.5-.002l-.003-1.851 2.265 1.942a.75.75 0 0 0 .976-1.14L14.63 12l2.857-2.437a.75.75 0 0 0-.974-1.14l-2.266 1.932z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FourK;
