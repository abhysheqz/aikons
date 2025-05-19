import React from "react";
const HouseSolarPanel: React.FC<
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
        d="M3.5 17.997V10h2v7.997L7.002 18a1 1 0 0 1-.004 2l-1.501-.003a2 2 0 0 1-1.997-2m15 .003v-8h2v8a2 2 0 0 1-2 2H17a1 1 0 1 1 0-2zM13.6 13.2a1 1 0 0 1 .2 1.4L12 17h2a1 1 0 0 1 .799 1.602l-3.016 4a1 1 0 1 1-1.597-1.204L11.994 19H10a1 1 0 0 1-.8-1.6l3-4a1 1 0 0 1 1.4-.2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.375 11H9.624l.536-4.25h3.685zm-.717-5.75h-3.31L10.885 1h2.245zm1.699 1.5.53 4.25H21a1 1 0 0 0 .935-1.355l-1.1-2.895zm4.91-1.5H15.17L14.64 1h3.323a1 1 0 0 1 .935.645zm-11.43 0L9.373 1H6a1 1 0 0 0-.936.649L3.714 5.25zM3.15 6.75 2.064 9.649A1 1 0 0 0 3 11h5.112l.536-4.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HouseSolarPanel;
