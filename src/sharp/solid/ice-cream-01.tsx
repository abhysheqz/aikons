import React from "react";
const IceCream_01: React.FC<
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
        d="M20.75 11v-.977l-.944.253c-2.309.62-4.969.974-7.806.974s-5.497-.355-7.806-.974l-.944-.253V11a8.75 8.75 0 0 0 8 8.718v1.532H9v1.5h6v-1.5h-2.25v-1.532a8.75 8.75 0 0 0 8-8.718"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.926 2.336c2.934.797 5.179 3.353 5.809 6.518l-1.471.293a7.6 7.6 0 0 0-.596-1.791c-.15.276-.342.56-.585.824-.532.582-1.295 1.058-2.347 1.183-.982.117-2.16-.078-3.576-.686-.13.026-.3.055-.5.077A5.5 5.5 0 0 1 8.968 8.7c-.638-.131-1.338-.427-1.874-1.05a3.2 3.2 0 0 1-.498-.796c-.4.69-.696 1.462-.861 2.294l-1.471-.293c.63-3.166 2.876-5.723 5.81-6.519a2.25 2.25 0 0 1 3.852 0M11.25 3.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default IceCream_01;
