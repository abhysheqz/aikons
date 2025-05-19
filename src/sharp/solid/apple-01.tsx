import React from "react";
const Apple_01: React.FC<
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
        d="M8 4.25c-1.667 0-3.115.908-4.121 2.165a7.5 7.5 0 0 0-1.629 4.613c0 3.62.523 6.288 2.625 9.456l.012.017.012.017c.835 1.119 1.866 1.892 3.062 2.144 1.202.254 2.448-.046 3.653-.837L12 21.59l.386.234c1.205.79 2.451 1.09 3.653.837 1.196-.252 2.227-1.025 3.062-2.144l.012-.017.012-.017c2.102-3.168 2.625-5.836 2.625-9.456a7.5 7.5 0 0 0-1.629-4.613C19.115 5.158 17.667 4.25 16 4.25c-1.62 0-3.025.843-4 1.712-.975-.869-2.38-1.712-4-1.712M6.75 12c0-1.425.729-2.792 1.646-3.363l-.792-1.274C6.167 8.258 5.25 10.158 5.25 12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.26 3.856c-.374.693-.51 1.561-.51 2.144h-1.5c0-.75.164-1.883.69-2.856.543-1.006 1.513-1.894 3.06-1.894v1.5c-.853 0-1.383.446-1.74 1.106"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Apple_01;
