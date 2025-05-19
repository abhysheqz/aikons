import React from "react";
const Ds3Tool: React.FC<
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
        d="M1.25 3.712a.97.97 0 0 1 .977-.962h19.546c.54 0 .977.43.977.962V15.25h-1.954V4.673H3.204V15.25H1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 8h-3V6h3zM17.01 10.078c-3.122-.77-6.898-.77-10.02 0-.802.198-1.41.786-1.686 1.537-.416 1.134-.89 3.032-1.05 5.591-.07 1.125.664 1.933 1.354 2.464.613.471 1.357.848 1.907 1.127h.002l.225.116.657.337 1.55-2.905h4.115l1.64 2.897.64-.33.157-.08c.558-.285 1.32-.674 1.944-1.17.677-.538 1.37-1.346 1.3-2.456-.16-2.56-.632-4.457-1.05-5.591-.275-.751-.883-1.34-1.684-1.537m-8.003 5.17a1 1 0 1 0 0-2h-.009a1 1 0 1 0 0 2zm6 0a1 1 0 1 0 0-2h-.009a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ds3Tool;
