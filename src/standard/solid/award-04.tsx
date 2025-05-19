import React from "react";
const Award_04: React.FC<
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
        d="m6.008 21.876 1-8 1.984.248-.79 6.318 3.427-1.37a1 1 0 0 1 .742 0l3.426 1.37-.79-6.318 1.985-.248 1 8a1 1 0 0 1-1.363 1.052L12 21.078l-4.629 1.851a1 1 0 0 1-1.363-1.052"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.356 1.34a.75.75 0 0 0-.712 0l-6.5 3.5a.75.75 0 0 0-.394.66v7c0 .276.151.53.394.66l6.5 3.5c.222.12.49.12.712 0l6.5-3.5a.75.75 0 0 0 .394-.66v-7a.75.75 0 0 0-.394-.66zm2.412 6.8a1 1 0 1 0-1.536-1.28l-1.8 2.159-.725-.726a1 1 0 1 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.475-.067z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Award_04;
