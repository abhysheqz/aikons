import React from "react";
const Store_01: React.FC<
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
        d="M2.988 10.5v11H20.98v-11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.982 17c-.683.607-1.772 1-2.998 1s-2.315-.393-2.999-1M9.136 10.273c-1.199 1.309-2.882 1.308-3.857 1.133-1.506-.27-2.646-1.466-3.278-2.375a.01.01 0 0 1-.002-.009L4.05 2.5h15.905L22 9.001a.01.01 0 0 1-.001.009c-.878 1.315-3.333 3.814-6.783 1.65l-.488-.222m-5.592-.165c.519-.566.947-1.377 1.188-2.524m-1.188 2.524c.591.667 2.234 1.761 4.269.962.552-.217.983-.49 1.323-.797m0 0c.855-.774 1.135-1.775 1.339-2.69"
      />
    </svg>
  );
};
export default Store_01;
