import React from "react";
const SearchArea: React.FC<
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
        d="M2.25 2.25h5.363V4.2H4.2v3.412H2.25zm6.825 0h5.85V4.2h-5.85zm7.313 0h5.362v5.362H19.8V4.199h-3.413zM4.2 9.073v5.85H2.25v-5.85zm0 7.313v3.412h3.412v1.95H2.25v-5.362zM7.336 13.837a6.5 6.5 0 1 1 11.75 3.834l2.664 2.666-1.415 1.414-2.664-2.666a6.5 6.5 0 0 1-10.335-5.248m6.5-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchArea;
