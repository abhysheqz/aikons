import React from "react";
const CursorHold_01: React.FC<
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
        d="M9.532 2.969c-1.008-.819-1.734-1.164-2.484-.86-1.103.45-1.198 1.875-1.376 4.553l-.564 7.724c-.135 1.82-.202 2.73.16 3.188.249.314.613.513 1.01.553.577.058 1.3-.493 2.744-1.596.609-.465.913-.697 1.217-.712.211-.01.42.047.596.165.254.17.397.527.683 1.24L13 20.92c.172.427.257.641.394.781.184.19.435.297.698.299.195.001.407-.085.831-.258.424-.172.636-.258.776-.396a1 1 0 0 0 .296-.703c.001-.197-.084-.41-.256-.837l-1.482-3.697c-.286-.713-.43-1.07-.364-1.369a1 1 0 0 1 .314-.536c.23-.202.609-.248 1.367-.34 1.8-.217 2.7-.325 3.075-.772.258-.306.382-.704.344-1.104-.024-.258-.17-.522-.445-.841"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.6 6.4 1.6-1.6M19 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default CursorHold_01;
