import React from "react";
const PaintBrush_03: React.FC<
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
        d="m19.618 2.293 2.089 2.09a1 1 0 0 1 0 1.416l-5.924 5.924a3 3 0 0 0-.88 2.124v2.43c0 .545-.148 1.08-.428 1.546l-.414.69a1.002 1.002 0 0 1-1.473.277l-1.66 2.268a2.224 2.224 0 0 1-3.39.29l-4.886-4.885a2.224 2.224 0 0 1 .296-3.395l2.294-1.616a1.002 1.002 0 0 1 .244-1.513l.69-.414a3 3 0 0 1 1.547-.428h2.43c.797 0 1.561-.317 2.124-.88l5.924-5.924a1 1 0 0 1 1.417 0M6.317 12.53l-2.508 1.767a.724.724 0 0 0-.097 1.105l.913.913L6.22 14.72a.75.75 0 1 1 1.06 1.06l-1.594 1.595.939.94.595-.595a.75.75 0 1 1 1.06 1.06l-.594.595.912.913a.724.724 0 0 0 1.105-.097l.01-.013 1.797-2.455z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PaintBrush_03;
