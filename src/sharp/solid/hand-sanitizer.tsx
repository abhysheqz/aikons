import React from "react";
const HandSanitizer: React.FC<
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
        d="M5.75 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v3h-1.5V6.75h-4.5V9h-1.5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M7.25 3.5a2.25 2.25 0 0 1 4.5 0V6h-4.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.852 2.265a.75.75 0 0 1 .735.266l2 2.5-1.172.938-1.714-2.143-5.55 1.128-.3-1.47z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.5 6.976s.701.662.778.743c.153.161.359.39.566.66.206.266.425.588.595.934.166.338.311.75.311 1.187 0 .737-.259 1.336-.735 1.738-.455.383-1.02.512-1.515.512s-1.06-.13-1.515-.512c-.476-.402-.735-1.001-.735-1.738 0-.436.145-.849.311-1.187a5.7 5.7 0 0 1 .595-.935c.207-.27.413-.498.566-.66.077-.08.778-.742.778-.742"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.704 8.25a4.75 4.75 0 0 0-4.736 4.386l-.716 9.307A.75.75 0 0 0 3 22.75h13a.75.75 0 0 0 .748-.808l-.716-9.306a4.75 4.75 0 0 0-4.736-4.386zM8.5 13v2h-2v2h2v2h2v-2h2v-2h-2v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HandSanitizer;
