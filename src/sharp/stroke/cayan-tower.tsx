import React from "react";
const CayanTower: React.FC<
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
        d="M10 18.005h3.5M8 15.025h4m-4.5-3.017H11M4 22.002h16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.867 14.538c1.693-3.479 2.638-8.65 1.676-10.58l-5.494-1.96-5.579 1.96c-1.17 3.09.061 7.138 1.677 10.718m7.72-.139c1.164 2.675 2.119 4.978 2.037 6.817m-2.037-6.816c-1.527-3.51-3.415-7.66-3.796-12.251m-.112 19.557c-1.07-1.851-2.535-4.338-3.812-7.169m0 0c-.415-.35-1.636 4.44-2.202 6.858"
      />
    </svg>
  );
};
export default CayanTower;
