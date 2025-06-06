import React from "react";
const CursorMove_01: React.FC<
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
        d="M14.5 2v2.7m0-2.7c-.45 0-1.53 1.253-1.53 1.253M14.5 2c.451 0 1.53 1.253 1.53 1.253M14.5 11V8.3m0 2.7c.45 0 1.53-1.253 1.53-1.253M14.5 11c-.45 0-1.53-1.253-1.53-1.253M10 6.501h2.7m-2.7 0c0 .449 1.253 1.53 1.253 1.53M10 6.5c0-.451 1.253-1.53 1.253-1.53M19 6.5h-2.7m2.7 0c0-.451-1.253-1.53-1.253-1.53M19 6.5c0 .449-1.253 1.53-1.253 1.53"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.81 3.2c-1.156-.983-1.945-1.423-2.762-1.09-1.103.449-1.198 1.874-1.376 4.552l-.564 7.724c-.135 1.82-.202 2.73.16 3.188.249.314.613.513 1.01.553.577.058 1.3-.493 2.744-1.596.609-.465.913-.697 1.217-.712.211-.01.42.047.596.165.254.17.397.527.683 1.24L13 20.92c.172.427.257.641.394.781.184.19.435.297.698.299.195.001.407-.085.831-.258.424-.172.636-.258.776-.396a1 1 0 0 0 .296-.703c.001-.197-.084-.41-.256-.837l-1.482-3.697c-.286-.713-.43-1.07-.364-1.369a1 1 0 0 1 .314-.536c.23-.202.609-.248 1.367-.34 1.8-.217 2.7-.325 3.075-.772.258-.306.382-.704.344-1.104-.032-.35-.29-.71-.786-1.206"
      />
    </svg>
  );
};
export default CursorMove_01;
