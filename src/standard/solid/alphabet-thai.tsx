import React from "react";
const AlphabetThai: React.FC<
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
        d="M11.712 3.95c-1.072 0-1.945.203-2.65.57l-.008.004c-1.203.611-2.125 1.784-2.125 3.14 0 .64.211.961.534 1.225.361.297.843.507 1.512.8l.274.12c.537.237.62.764.608 1.006-.012.239-.15.767-.723.94-.613.186-1.199.45-1.613.798-.393.329-.592.691-.592 1.147v6.825a.97.97 0 0 1-.965.975.97.97 0 0 1-.964-.975V13.7c0-1.174.573-2.047 1.29-2.648q.204-.17.423-.316a5 5 0 0 1-.464-.332C5.494 9.786 5 8.916 5 7.664c0-2.293 1.53-4.039 3.184-4.88C9.214 2.248 10.4 2 11.712 2c1.159 0 2.251.22 3.266.668C17.34 3.67 18.5 6.041 18.5 8.548v11.977a.97.97 0 0 1-.964.975.97.97 0 0 1-.965-.975V8.548c0-1.935-.87-3.462-2.344-4.083l-.017-.008a6.1 6.1 0 0 0-2.498-.507"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlphabetThai;
