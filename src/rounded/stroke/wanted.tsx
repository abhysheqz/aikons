import React from "react";
const Wanted: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.517 2.015H7.884c-1.038 0-2.445-.183-3.165.744-.427.549-.427 1.36-.427 2.98 0 1.299 1.747 2.272 1.728 2.77-.02.5-1.728 1.497-1.728 2.827v6.195c0 .594-.28 1.053-.532 1.577-.625 1.296-.938 1.944-.655 2.418s.98.474 2.378.474h10.37c1.818 0 2.726 0 3.29-.585.565-.586.565-1.528.565-3.412V6.483c0-.593.28-1.053.532-1.576.625-1.296.938-1.945.655-2.419-.282-.473-.98-.473-2.378-.473ZM15 18H9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9.891 11.556c-.55.316-1.992.96-1.114 1.768.43.394.907.676 1.508.676h3.43c.6 0 1.079-.282 1.508-.676.879-.807-.564-1.453-1.114-1.768a4.28 4.28 0 0 0-4.218 0Z"
      />
    </svg>
  );
};
export default Wanted;
