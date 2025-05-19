import React from "react";
const Kurta: React.FC<
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
        d="M9.328 3.808v-1.22c.6.256 1.408.514 2.25.514s1.65-.258 2.25-.513V3.81l-1.5.494v3.298h.75a.75.75 0 0 1 0 1.5h-.75v1h.75a.75.75 0 0 1 0 1.5h-.75v.756a.75.75 0 0 1-1.5 0V4.297zm-1.5.005V2.287c0-1.021 1.095-1.536 1.886-1.168.534.248 1.22.483 1.864.483s1.33-.235 1.864-.483c.792-.368 1.886.147 1.886 1.168V3.81l2.836.945a2.75 2.75 0 0 1 1.847 2.18l1.127 7.143a1.75 1.75 0 0 1-1.728 2.023h-2.016l.335 4.099a1.75 1.75 0 0 1-1.744 1.892H7.168a1.75 1.75 0 0 1-1.744-1.895l.341-4.096H3.75a1.75 1.75 0 0 1-1.728-2.023L3.15 6.937a2.75 2.75 0 0 1 1.846-2.18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Kurta;
