import React from "react";
const CongruentTo: React.FC<
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
        d="M20 14H4v-2h16zM20 20H4v-2h16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.91 6.012c-.944-.084-1.987.256-3.163 1.58L3.5 5.994C4.922 4.51 6.461 3.875 8.088 4.02c1.638.146 3.166 1.072 4.547 2.208 1.285 1.058 2.425 1.668 3.453 1.76.945.084 1.987-.256 3.164-1.58L20.5 8v.005c-1.422 1.485-2.962 2.12-4.59 1.975-1.638-.146-3.165-1.071-4.546-2.208-1.286-1.057-2.425-1.668-3.454-1.76"
      />
    </svg>
  );
};
export default CongruentTo;
