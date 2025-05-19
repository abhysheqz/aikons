import React from "react";
const InformationDiamond: React.FC<
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
        d="M11.911 16.014v-5h-2m2-3.5v1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.412 19.358c0 .11.09.2.2.2h4.291l2.956 2.384a.2.2 0 0 0 .285 0l2.793-2.383h4.436a.2.2 0 0 0 .201-.2v-4.22l2.368-2.983a.2.2 0 0 0 0-.284l-2.368-2.983V4.653a.2.2 0 0 0-.201-.201h-4.245l-3.001-2.394a.2.2 0 0 0-.285 0L8.841 4.452H4.613a.2.2 0 0 0-.201.2v4.22l-2.354 2.983a.2.2 0 0 0 0 .284l2.354 2.983z"
      />
    </svg>
  );
};
export default InformationDiamond;
