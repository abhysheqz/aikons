import React from "react";
const MoneyBag_01: React.FC<
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
        d="M16.746 7.75H7.253c-.72.812-1.52 1.81-2.267 2.915-1.208 1.788-2.316 3.92-2.67 6.047-.29 1.75.381 3.285 1.536 4.357 1.143 1.062 2.764 1.681 4.455 1.681h7.383c1.691 0 3.312-.62 4.455-1.68 1.155-1.073 1.827-2.608 1.536-4.358-.353-2.127-1.462-4.26-2.67-6.047a29 29 0 0 0-2.267-2.915M12.53 1.47a.75.75 0 0 0-1.06 0L9.743 3.197l-2.62-.437a.75.75 0 0 0-.774 1.112L7.708 6.25h8.584l1.36-2.378a.75.75 0 0 0-.775-1.112l-2.62.437z"
      />
    </svg>
  );
};
export default MoneyBag_01;
