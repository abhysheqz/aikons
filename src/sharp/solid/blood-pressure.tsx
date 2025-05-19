import React from "react";
const BloodPressure: React.FC<
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
        d="M15.951 10.004a1 1 0 0 1 .96.512L18.839 14h2.411v2h-3a1 1 0 0 1-.875-.516l-1.132-2.045-1.358 3.89a1 1 0 0 1-1.822.151L11.158 14H9.25v-2h2.5a1 1 0 0 1 .877.52l1.11 2.028 1.355-3.878a1 1 0 0 1 .859-.666"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.74 1.414c-.428.269-1.183.744-1.505.973a26.6 26.6 0 0 0-3.007 2.487C5.066 6.96 2.75 10.004 2.75 13.551c0 5.08 4.141 9.199 9.25 9.199a9.26 9.26 0 0 0 8.357-5.25H18.25a2.5 2.5 0 0 1-1.626-.601l-.323.925a2.5 2.5 0 0 1-4.553.377l-1.48-2.701H7.75v-5h4a2.5 2.5 0 0 1 1.608.585l.317-.91a2.5 2.5 0 0 1 4.548-.386l1.5 2.71h1.46c-.396-3.095-2.466-5.748-4.41-7.625a26.6 26.6 0 0 0-3.008-2.487c-.322-.23-1.077-.704-1.504-.972L12 1.25z"
      />
    </svg>
  );
};
export default BloodPressure;
