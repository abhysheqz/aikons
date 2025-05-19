import React from "react";
const Pencil: React.FC<
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
        d="M12 2.25a.75.75 0 0 1 .624.334l6 9a.75.75 0 0 1 .126.416v9a.75.75 0 0 1-1.5 0v-8.773l-3.267-4.901q-.159.064-.37.136c-.413.137-1 .288-1.613.288s-1.2-.151-1.612-.288a7 7 0 0 1-.37-.136L6.75 12.227V21a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .126-.416l6-9A.75.75 0 0 1 12 2.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.75 21.75H18a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-1.085-.67L15 12.661l-2.25-1.126zM11.25 11.537V21.75H6a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 1.085-.67L9 12.661z"
      />
    </svg>
  );
};
export default Pencil;
