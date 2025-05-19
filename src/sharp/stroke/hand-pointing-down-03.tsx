import React from "react";
const HandPointingDown_03: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.014 1.71v2.006L3.611 9.588l-.074.1c-.32.413-.576.91-.517 1.43.092.8.685 1.458 1.453 1.57.45.066 1.062-.065 1.474-.444l2.098-2.125-.031 1.723v8.303c0 .864.674 1.565 1.506 1.565s1.507-.7 1.507-1.565v-8.42m.58 3.497 1.11-.046c.827-.125 1.237-.7 1.276-1.414l.02-2.56m.35 3.005h1.101c.851.032 1.57-.695 1.542-1.538v-1.975m.606 1.998.996-.023c.8-.018 1.378-.685 1.378-1.517l.022-2.41c-.032-.682-.01-1.808-.25-2.612a1.9 1.9 0 0 0-.233-.473l-.2-.31-.437-.572-.876-1.066V1.712"
      />
    </svg>
  );
};
export default HandPointingDown_03;
