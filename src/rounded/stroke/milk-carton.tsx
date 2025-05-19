import React from "react";
const MilkCarton: React.FC<
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
        strokeWidth={1.5}
        d="M5.172 6.828 7 5l1.828 1.828c.578.578.868.868 1.02 1.235S10 8.84 10 9.657V22H8c-1.886 0-2.828 0-3.414-.586S4 19.886 4 18V9.657c0-.818 0-1.226.152-1.594.152-.367.442-.657 1.02-1.235Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 5.004v-.4c0-1.224 0-1.836.38-2.216.382-.38.994-.38 2.22-.38h5.554c.706 0 1.622-.113 2.095.53.501.684.073 1.624.29 2.38.066.23.23.407.38.587L20 8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 8h10v10c0 1.886 0 2.828-.586 3.414S17.886 22 16 22h-6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 13c.476.5 1.743.476 2.487.279a1.34 1.34 0 0 1 1.428.485l.688.902c.395.519.994.765 1.584.651l.87-.167c.478-.092.954.14 1.28.556C19.352 17 20 17 20 17"
      />
    </svg>
  );
};
export default MilkCarton;
