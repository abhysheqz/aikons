import React from "react";
const ContainerTruck: React.FC<
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
        d="M4.5 18.25a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M14.5 18.25a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.227 3.25a.98.98 0 0 0-.69.284.96.96 0 0 0-.287.685l.002 13.562c0 .535.437.969.977.969h1.054a3.75 3.75 0 1 1 7.434 0h2.566a3.75 3.75 0 1 1 7.434 0h1.056c.54 0 .977-.434.977-.969V11a.96.96 0 0 0-.177-.556l-3.42-4.843a.98.98 0 0 0-.8-.413H15.42v-.97a.973.973 0 0 0-.977-.968zm13.195 6.781V7.125h2.423l2.052 2.906zM5 7v4h2V7zm4 0v4h2V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ContainerTruck;
