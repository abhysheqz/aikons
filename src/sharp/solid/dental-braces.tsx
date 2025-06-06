import React from "react";
const DentalBraces: React.FC<
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
        d="M12.161 4.017c2.608-2.584 6.269-2.136 8.03.064l.02.024c.257.322.654.816.975 1.545.332.752.574 1.724.564 3.004q-.004.622-.095 1.346H14.75V9a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v1H2.345q-.091-.723-.095-1.346c-.01-1.28.232-2.252.564-3.004.321-.729.718-1.223.975-1.545l.02-.024c1.761-2.2 5.422-2.648 8.03-.064l.161.157q.08-.075.161-.157M2.74 12c.578 2.222 1.726 5.03 3.75 8.608.405.718 1.19 1.142 2.006 1.142a2.384 2.384 0 0 0 2.386-2.284c.03-.873.13-1.732.362-2.35s.49-.763.756-.763c.265 0 .524.145.756.764.232.617.332 1.476.362 2.349a2.384 2.384 0 0 0 2.386 2.284c.816 0 1.6-.424 2.007-1.142 2.023-3.579 3.171-6.386 3.75-8.608H14.75v1a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1z"
      />
    </svg>
  );
};
export default DentalBraces;
