import React from "react";
const Dart: React.FC<
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
        d="m19.888 5.172 2.611-2.611-1.06-1.061-2.612 2.611a3.724 3.724 0 0 0-4.676.479l5.26 5.26a3.724 3.724 0 0 0 .477-4.678M7.16 15.78l6.112-9.948 4.896 4.897-9.952 6.115-.81.81L5.793 22.5H1.501v-4.29l4.843-1.615z"
      />
    </svg>
  );
};
export default Dart;
