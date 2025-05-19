import React from "react";
const CircleArrowLeft_02: React.FC<
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
        d="M1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25 1.25 6.063 1.25 12M17 12a1 1 0 0 0-1-1h-4.5v-.162c0-.29 0-.598-.029-.84-.021-.177-.1-.827-.71-1.128s-1.152.045-1.298.139a7 7 0 0 0-.655.504l-.038.031c-.346.288-.741.63-1.055.974a3.6 3.6 0 0 0-.446.585c-.118.2-.269.514-.269.897s.15.698.269.897c.127.216.289.414.446.585.314.344.709.686 1.055.974l.038.03c.22.183.453.377.655.505.146.094.689.439 1.298.139s.689-.951.71-1.128a8 8 0 0 0 .029-.84V13H16a1 1 0 0 0 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowLeft_02;
