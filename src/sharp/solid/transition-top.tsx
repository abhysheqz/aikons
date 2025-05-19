import React from "react";
const TransitionTop: React.FC<
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
        d="M22.002 22.75a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75h-20a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.797 3.139v6.61h1.955V2.195c0-.521-.438-.944-.977-.944H2.229c-.54 0-.977.423-.977.944V9.75h1.955V3.139z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.209 7.793-3.207-3.207-3.207 3.207 1.414 1.414.793-.793V14h2V8.414l.793.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TransitionTop;
