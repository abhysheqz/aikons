import React from "react";
const DrawingCompass: React.FC<
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
        d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 8a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.176 11.597 4.09 20.586a1 1 0 0 0 1.82.828l3.924-8.63a5.3 5.3 0 0 1-1.658-1.187M14.167 12.783l3.923 8.63a1 1 0 1 0 1.82-.827l-4.085-8.99a5.3 5.3 0 0 1-1.658 1.187"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.45 12.165a1 1 0 0 1 1.385.285C5.476 14.943 8.06 16.632 11 16.947V16.5a1 1 0 1 1 2 0v.447c2.941-.315 5.524-2.004 7.165-4.497a1 1 0 1 1 1.67 1.1c-1.98 3.007-5.164 5.084-8.835 5.406v.544a1 1 0 1 1-2 0v-.544c-3.671-.322-6.856-2.4-8.835-5.406a1 1 0 0 1 .285-1.385"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DrawingCompass;
