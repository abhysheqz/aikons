import React from "react";
const Coffee_01: React.FC<
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
        d="m6.658 3.926-.937 3.28-1.442-.412 1-3.5a.75.75 0 0 1 .209-.342c.649-.607 1.665-1.013 2.749-1.276 1.109-.269 2.393-.411 3.672-.425 1.279-.013 2.58.102 3.72.365 1.122.258 2.18.677 2.883 1.336.1.093.172.211.21.342l1 3.5-1.443.412-.938-3.283c-.438-.34-1.135-.636-2.047-.846-1.003-.23-2.182-.339-3.37-.326-1.186.012-2.354.145-3.334.383-.884.214-1.54.495-1.932.792"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.656 7.75 17.743 22.1a.75.75 0 0 1-.744.65H7a.75.75 0 0 1-.743-.65L4.343 7.75H3v-1.5h18v1.5zM10.75 14.5c0-1.131.707-1.75 1.25-1.75s1.25.619 1.25 1.75-.707 1.75-1.25 1.75-1.25-.619-1.25-1.75M12 11.25c-1.666 0-2.75 1.62-2.75 3.25s1.084 3.25 2.75 3.25 2.75-1.62 2.75-3.25-1.084-3.25-2.75-3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Coffee_01;
