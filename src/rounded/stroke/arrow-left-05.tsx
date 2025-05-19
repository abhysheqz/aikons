import React from "react";
const ArrowLeft_05: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6v12M12.497 12.01v.371c.04 2.971-.095 4.004-1.345 3.524l-.308-.181-.249-.173-.535-.413-1-.87-1.023-.863-.5-.453-.223-.227-.262-.379-.054-.336.054-.334.262-.38.223-.226.5-.453 1.023-.864 1-.87.535-.412.249-.173.308-.182c1.25-.479 1.385.553 1.345 3.524zm0 0H20"
      />
    </svg>
  );
};
export default ArrowLeft_05;
