import React from "react";
const Blockchain_01: React.FC<
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
        d="M12.165 2.096a.75.75 0 0 0-.736 0l-8 4.5a.75.75 0 0 0-.347.429 1 1 0 0 0-.082.39v8.78c0 .352.19.677.497.85l7.805 4.39c.297.167.66.167.956 0l7.805-4.39a.98.98 0 0 0 .497-.85v-8.78a1 1 0 0 0-.013-.159V7.25a.75.75 0 0 0-.382-.654zM4.95 9.083l5.853 3.293v6.54l-5.853-3.292zm13.658 6.541-5.854 3.293v-6.541l5.854-3.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_01;
