import React from "react";
const TransitionRight: React.FC<
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
        d="M1.25 2A.75.75 0 0 1 2 1.25h8a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.861 3.205H14.25V1.25h7.556c.521 0 .944.438.944.977v19.546c0 .54-.423.977-.944.977H14.25v-1.954h6.611z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.207 8.793 19.414 12l-3.207 3.207-1.414-1.414.793-.793H10v-2h5.586l-.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TransitionRight;
