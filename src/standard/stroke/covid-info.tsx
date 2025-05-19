import React from "react";
const CovidInfo: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.527 15.082c4.001-3.068 3.368-6.469 1.515-7.563-1.452-.859-2.72-.513-3.482.038C12.248 7.783 12 8 12 8s-.248-.217-.56-.443c-.762-.55-2.03-.897-3.482-.038-1.846 1.09-2.309 4.595 1.655 7.662C12.245 17.218 16 19 19 19M5 19c1.549 0 3.117-.433 4.508-1"
      />
    </svg>
  );
};
export default CovidInfo;
