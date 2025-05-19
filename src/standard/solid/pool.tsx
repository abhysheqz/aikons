import React from "react";
const Pool: React.FC<
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
        d="M18.707 3.707a1 1 0 0 0-1.414-1.414l-1.414 1.414A3 3 0 0 0 15 5.828V6H9v-.172a1 1 0 0 1 .293-.707l1.414-1.414a1 1 0 0 0-1.414-1.414L7.879 3.707A3 3 0 0 0 7 5.828V17a1 1 0 1 0 2 0v-1h6v1a1 1 0 1 0 2 0V5.828a1 1 0 0 1 .293-.707zM15 8H9v2h6zm0 4H9v2h6zm-8.028 6.763a1 1 0 0 0-1.944 0C4.888 19.337 4.125 20 3 20H2a1 1 0 1 0 0 2h1c1.11 0 2.221-.412 3-1.138C6.779 21.588 7.89 22 9 22s2.221-.412 3-1.138c.779.726 1.89 1.138 3 1.138s2.221-.412 3-1.138c.779.726 1.89 1.138 3 1.138h1a1 1 0 1 0 0-2h-1c-1.125 0-1.889-.663-2.028-1.237a1 1 0 0 0-1.944 0C16.888 19.337 16.125 20 15 20s-1.889-.663-2.028-1.237a1 1 0 0 0-1.944 0C10.888 19.337 10.125 20 9 20s-1.889-.663-2.028-1.237"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pool;
