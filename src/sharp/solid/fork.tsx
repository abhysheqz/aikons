import React from "react";
const Fork: React.FC<
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
        d="M18.105 2.65 14.54 6.128l.958.959 3.293-3.293 1.414 1.414L16.912 8.5l.914.914 3.521-3.521 1.401 1.4-4.163 4.163a5.37 5.37 0 0 1-3.712 1.571h-.815l-8.35 8.906a2.577 2.577 0 1 1-3.644-3.641l8.906-8.684v-.484a5.37 5.37 0 0 1 1.572-3.712l4.163-4.162z"
      />
    </svg>
  );
};
export default Fork;
