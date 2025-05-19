import React from "react";
const Contact_02: React.FC<
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
        d="M3.25 2A.75.75 0 0 1 4 1.25h17.5a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-3h-1.5v-2h1.5v-4h-1.5v-2h1.5V7h-1.5V5h1.5zm7.785 11.99a10.7 10.7 0 0 1-1.374-1.678l2.077-1.936-2.175-4.338-.725.591c-.738.601-2.07 1.743-1.714 3.516.154.76.41 1.512.926 2.41a12 12 0 0 0 1.925 2.496c.75.75 1.597 1.41 2.496 1.925.898.515 1.65.772 2.41.926 1.774.357 2.915-.976 3.516-1.714l.59-.725-4.337-2.174-1.936 2.076a10.7 10.7 0 0 1-1.679-1.375"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Contact_02;
