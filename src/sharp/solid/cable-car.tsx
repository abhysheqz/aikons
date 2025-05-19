import React from "react";
const CableCar: React.FC<
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
        d="M12.277 3H4V1h16v2h-5.42l-.857 1.5H15v2H9v-2h2.42zM5.223 8.234a.97.97 0 0 1 .944-.734h11.666c.447 0 .835.303.944.734l1.944 7.75a1 1 0 0 1 .016.394l-.972 5.813a.97.97 0 0 1-.96.809H5.196a.97.97 0 0 1-.96-.81l-.972-5.812a1 1 0 0 1 .016-.394zm1.704 1.204L5.47 15.25H11V9.438zm10.149 0 1.458 5.812H13V9.438z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CableCar;
