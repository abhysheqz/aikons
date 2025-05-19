import React from "react";
const Identification: React.FC<
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
        d="M1.5 1.5h7.645v2H3.501v5.644h-2zm19 2h-5.643v-2H22.5v7.644h-2zm2 11.356V22.5h-7.643v-2H20.5v-5.644zM3.5 20.5v-5.644h-2V22.5h7.645v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.75 9.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M11.96 13.564c1.863-.018 3.68 1.042 4.71 3.1A.75.75 0 0 1 16 17.75H8a.75.75 0 0 1-.673-1.082c.985-1.994 2.775-3.085 4.633-3.104"
      />
    </svg>
  );
};
export default Identification;
