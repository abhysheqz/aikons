import React from "react";
const VegetarianFood: React.FC<
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
        d="M17.072 10.66a4.5 4.5 0 0 0-.695 1.538 4.5 4.5 0 0 0-1.195-.179c-.998 0-1.99.648-2.696 1.56-.727.94-1.236 2.256-1.236 3.805 0 3.284 2.933 5.366 5.75 5.366s5.75-2.082 5.75-5.366c0-1.55-.51-2.865-1.236-3.805-.707-.912-1.698-1.56-2.696-1.56-.294 0-.58.038-.841.092.082-.204.188-.401.315-.578.343-.48.816-.783 1.435-.783v-1.5c-1.198 0-2.09.62-2.655 1.41M4.5 1.25h7a1.5 1.5 0 1 1 0 3h-7a1.5 1.5 0 1 1 0-3"
      />
      <path
        fill="currentColor"
        d="M1.25 13.777c0-3.176.923-5.597 2.27-8.19.306.105.637.163.98.163h7c.343 0 .673-.058.98-.164.862 1.659 1.55 3.248 1.934 5.009-1.296.256-2.387 1.127-3.114 2.067-.932 1.203-1.55 2.842-1.55 4.723 0 2.36 1.142 4.19 2.737 5.365H2a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default VegetarianFood;
