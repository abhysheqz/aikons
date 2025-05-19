import React from "react";
const Touch_08: React.FC<
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
        d="M13.726 12.51v-1.903c0-.174-.028-.455-.08-.61m0 0c-.198-.577-.686-.993-1.311-.993h-1.71m3.02.993h1.783c.625 0 1.118.431 1.315 1.009m.083 2.188V11.63c0-.174-.03-.468-.083-.623m0 0h1.713c.989.086 1.472.775 1.472 1.582v6.44c0 1.641-1.304 2.86-2.871 2.972H8.03l-3.596-5.548c-1.342-2.273.107-3.75 2.946-6.312m3.244-1.136v2.992m0-2.992V3.75q0-.408-.1-.744c-.296-.984-1.598-1.312-2.4-.67-.342.273-.584.626-.584 1.011v11.164"
      />
    </svg>
  );
};
export default Touch_08;
