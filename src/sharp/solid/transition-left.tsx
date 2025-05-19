import React from "react";
const TransitionLeft: React.FC<
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
        d="M22.75 2a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v20c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.139 3.205H9.75V1.25H2.194c-.521 0-.944.438-.944.977v19.546c0 .54.423.977.944.977H9.75v-1.954H3.139z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.793 8.793 4.586 12l3.207 3.207 1.414-1.414L8.414 13H14v-2H8.414l.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TransitionLeft;
