import React from "react";
const Mountain: React.FC<
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
        d="M11.88 9.427c.574-.672 1.234-1.177 2.12-1.177s1.546.505 2.12 1.177c.558.653 1.154 1.606 1.888 2.78l4.628 7.395A.75.75 0 0 1 22 20.75H6a.75.75 0 0 1-.636-1.148l4.628-7.396c.734-1.173 1.33-2.126 1.888-2.779M9 3.25c-1.192 0-1.929.973-2.5 2.1-.593 1.17-1.195 2.897-1.962 5.096l-3.246 9.307A.75.75 0 0 0 2 20.75h2.146a2 2 0 0 1 .159-1.81l4.673-7.47c.696-1.113 1.333-2.131 1.952-2.855.373-.437.846-.894 1.445-1.21-.305-.807-.591-1.494-.875-2.055-.571-1.127-1.308-2.1-2.5-2.1"
      />
    </svg>
  );
};
export default Mountain;
