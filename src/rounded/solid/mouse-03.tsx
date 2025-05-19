import React from "react";
const Mouse_03: React.FC<
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
        d="M9.227 1.441A23 23 0 0 1 12 1.25c.95 0 1.879.08 2.773.191 2.833.352 5.02 2.715 5.24 5.508.129 1.628.237 3.32.237 5.051s-.108 3.423-.237 5.05c-.22 2.794-2.407 5.157-5.24 5.509A23 23 0 0 1 12 22.75c-.95 0-1.879-.08-2.773-.191-2.833-.352-5.02-2.715-5.24-5.509-.129-1.627-.237-3.318-.237-5.05s.108-3.423.237-5.05c.22-2.794 2.407-5.157 5.24-5.509M12 3.205c-.844 0-1.688.071-2.536.176-1.905.237-3.394 1.842-3.542 3.723a87 87 0 0 0-.168 2.523c-.014.291-.022.437.067.53s.236.093.53.093H17.65c.293 0 .44 0 .529-.093.088-.093.081-.239.067-.53a87 87 0 0 0-.168-2.523c-.148-1.88-1.637-3.486-3.542-3.723A21 21 0 0 0 12 3.205"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.727a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_03;
