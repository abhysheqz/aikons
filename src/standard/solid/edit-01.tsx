import React from "react";
const Edit_01: React.FC<
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
        d="M2 16.5A2.5 2.5 0 0 1 4.5 14h2.25a.75.75 0 0 1 0 1.5H4.5a1 1 0 1 0 0 2H14a2.5 2.5 0 0 1 0 5h-2.25a.75.75 0 0 1 0-1.5H14a1 1 0 1 0 0-2H4.5A2.5 2.5 0 0 1 2 16.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.603 2.499a1.704 1.704 0 0 1 2.41 0L22 4.488a1.704 1.704 0 0 1 0 2.409l-7.267 7.266a4.56 4.56 0 0 1-3.227 1.337H9.75a.75.75 0 0 1-.75-.75v-1.757c0-1.21.48-2.372 1.337-3.227z"
      />
    </svg>
  );
};
export default Edit_01;
