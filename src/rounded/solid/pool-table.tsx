import React from "react";
const PoolTable: React.FC<
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
        d="M20.074 4.045C19.772 4.002 19.35 4 18.65 4H5.35c-.701 0-1.122.002-1.423.045a1 1 0 0 0-.245.058.1.1 0 0 0-.04.025c-.004.004-.06.054-.098.353C3.502 4.81 3.5 5.266 3.5 6v8c0 .734.002 1.189.044 1.52.038.298.094.348.098.352a.1.1 0 0 0 .04.025 1 1 0 0 0 .245.058c.301.043.722.045 1.423.045h13.3c.702 0 1.122-.002 1.424-.045a1 1 0 0 0 .244-.058.1.1 0 0 0 .04-.025c.004-.004.06-.054.098-.353.042-.33.044-.785.044-1.519V6c0-.734-.002-1.189-.044-1.52-.038-.298-.094-.348-.098-.352a.1.1 0 0 0-.04-.025 1 1 0 0 0-.245-.058m.28-1.98c.508.072 1.03.24 1.454.686.416.438.567.966.632 1.476.06.473.06 1.058.06 1.714v8.118c0 .657 0 1.241-.06 1.714-.065.51-.216 1.038-.632 1.476-.423.446-.946.614-1.454.686-.46.065-1.024.065-1.641.065H5.287c-.617 0-1.182 0-1.64-.065-.51-.072-1.032-.24-1.455-.686-.416-.438-.567-.966-.632-1.476-.06-.473-.06-1.057-.06-1.714V5.94c0-.655 0-1.24.06-1.713.065-.51.216-1.038.632-1.476.423-.446.946-.614 1.454-.686C4.106 2 4.67 2 5.287 2h13.426c.617 0 1.182 0 1.64.065"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 9a1 1 0 0 1 1-1h.012a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1M6.75 3a.75.75 0 0 0-1.5 0A2.25 2.25 0 0 1 3 5.25a.75.75 0 0 0 0 1.5A3.75 3.75 0 0 0 6.75 3m12 0a.75.75 0 0 0-1.5 0A3.75 3.75 0 0 0 21 6.75a.75.75 0 0 0 0-1.5A2.25 2.25 0 0 1 18.75 3M3 13.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 5.25 17a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 3 13.25m18 0A3.75 3.75 0 0 0 17.25 17a.75.75 0 0 0 1.5 0A2.25 2.25 0 0 1 21 14.75a.75.75 0 0 0 0-1.5m-6.25-10a.75.75 0 0 0-1.5 0 1.25 1.25 0 1 1-2.5 0 .75.75 0 0 0-1.5 0 2.75 2.75 0 1 0 5.5 0m-4 13.5a1.25 1.25 0 1 1 2.5 0 .75.75 0 0 0 1.5 0 2.75 2.75 0 1 0-5.5 0 .75.75 0 0 0 1.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.065 10.675a1 1 0 0 1 .26 1.39l-6.5 9.5a1 1 0 1 1-1.65-1.13l6.5-9.5a1 1 0 0 1 1.39-.26"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoolTable;
