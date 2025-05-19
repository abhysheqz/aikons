import React from "react";
const Mymind: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.496 10.106c1.54 5.422-.567 10.665-4.707 11.711s-8.744-2.501-10.285-7.923c-1.54-5.422.567-10.665 4.707-11.711s8.744 2.501 10.285 7.923Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.319 15.943 11.5 7l4.65 7.774c.266.444.398.665.334.879s-.298.329-.766.559l-.91.447c-.56.276-.841.414-1.073.302s-.293-.414-.416-1.018"
      />
      <circle
        cx={8.5}
        cy={11}
        r={1}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default Mymind;
