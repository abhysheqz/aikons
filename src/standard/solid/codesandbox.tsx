import React from "react";
const Codesandbox: React.FC<
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
        d="M11.665 1.33a.75.75 0 0 1 .67 0l3.669 1.833-3.891 1.943a.25.25 0 0 1-.224 0L8.006 3.158zM2.25 17v-4.553l3.863 1.946a.25.25 0 0 1 .137.223v5.048l-3.614-2.008A.75.75 0 0 1 2.25 17M17.75 19.664l3.614-2.008A.75.75 0 0 0 21.75 17v-4.521l-3.861 1.917a.25.25 0 0 0-.139.224z"
      />
      <path
        fill="currentColor"
        d="M17.62 4.033q.03-.014.059-.032l3.539 1.77L12 10.76 2.804 5.76l3.53-1.766a1 1 0 0 0 .068.039l4.815 2.413a1.75 1.75 0 0 0 1.565.002zM2.25 7.166v3.602l4.537 2.285c.59.297.963.902.963 1.563v5.78a1 1 0 0 1-.006.098l3.506 1.948V12.06zM16.257 20.493l-3.507 1.948v-10.38l9-4.873v3.62a1 1 0 0 0-.07.031l-4.458 2.213a1.75 1.75 0 0 0-.972 1.568v5.77a1 1 0 0 0 .007.103"
      />
    </svg>
  );
};
export default Codesandbox;
