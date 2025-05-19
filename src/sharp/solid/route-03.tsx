import React from "react";
const Route_03: React.FC<
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
        d="M18 1.25c-2.555 0-4.75 1.898-4.75 4.386 0 1.423.643 2.517 1.782 3.425.328.262.805.686 1.263 1.137.466.46.871.908 1.084 1.223a.75.75 0 0 0 1.228.02c.486-.67 1.688-1.843 2.36-2.38 1.14-.908 1.783-2.002 1.783-3.425 0-2.488-2.195-4.386-4.75-4.386m-.008 3c-.962 0-1.742.784-1.742 1.75s.78 1.75 1.742 1.75h.016c.962 0 1.742-.784 1.742-1.75s-.78-1.75-1.742-1.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 10c0-2.348 2.165-4 4.5-4H11v2H9.5C7.97 8 7 9.034 7 10s.97 2 2.5 2h3c2.335 0 4.5 1.652 4.5 4s-2.165 4-4.5 4H11v-2h1.5c1.53 0 2.5-1.035 2.5-2s-.97-2-2.5-2h-3C7.165 14 5 12.348 5 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Route_03;
