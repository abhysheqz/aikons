import React from "react";
const Raw_01: React.FC<
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
        d="M11.587 1.25c.57 0 1.075-.002 1.55.167q.147.052.288.12c.455.219.811.578 1.214.983l4.783 4.808c.467.468.882.884 1.106 1.428s.223 1.132.222 1.796v.198c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44H6.25c-1.414 0-2.121 0-2.56-.44-.44-.439-.44-1.146-.44-2.56V9.452c0-1.533 0-2.77.114-3.754.118-1.018.37-1.89.963-2.629q.327-.407.733-.737c.735-.595 1.603-.848 2.615-.967.98-.115 2.387-.115 3.912-.115m7.144 8.254c-.056-.138-.162-.268-.78-.89l-4.605-4.629c-.533-.535-.674-.669-.856-.723v.008c0 1.362 0 2.01.117 2.875.12.9.38 1.658.981 2.26.602.601 1.36.86 2.26.981.867.117 1.516.118 2.883.118M4 15.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-1.75h1.036l1.043 2.085a.75.75 0 1 0 1.342-.67L7.339 20A2.5 2.5 0 0 0 6.25 15.25zm2.25 3.5h-1.5v-2h1.5a1 1 0 1 1 0 2m5.5-3.5a.75.75 0 0 1 .702.486l2.25 6a.75.75 0 1 1-1.404.527l-.568-1.513h-1.96l-.567 1.513a.75.75 0 0 1-1.405-.527l2.25-6a.75.75 0 0 1 .702-.486m-.418 4h.836l-.418-1.114zM16.75 16a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.28.53L18 21.06l1.47 1.47a.75.75 0 0 0 1.28-.53v-6a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 0 0-1.06 0l-.72.72z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Raw_01;
