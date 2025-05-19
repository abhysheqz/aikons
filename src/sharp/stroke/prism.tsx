import React from "react";
const Prism: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15v-4m0 4 7.489 6.553M12 15l-7.49 6.553M20 9v13H4V9M12 2l8 7H4zm0 0v5"
      />
    </svg>
  );
};
export default Prism;
