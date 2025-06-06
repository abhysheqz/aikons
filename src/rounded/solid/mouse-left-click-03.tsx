import React from "react";
const MouseLeftClick_03: React.FC<
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
        d="M9.227 1.441A23 23 0 0 1 12 1.25c.95 0 1.879.08 2.773.191 2.833.352 5.02 2.715 5.24 5.508.129 1.628.237 3.32.237 5.051s-.108 3.423-.237 5.05c-.22 2.794-2.407 5.157-5.24 5.509A23 23 0 0 1 12 22.75c-.95 0-1.879-.08-2.773-.191-2.833-.352-5.02-2.715-5.24-5.509-.129-1.627-.237-3.318-.237-5.05s.108-3.423.237-5.05c.22-2.794 2.407-5.157 5.24-5.509m.237 1.94q.45-.056.9-.097c.294-.027.44-.04.538.05.098.088.098.238.098.539v2.8c0 .68 0 1.02-.196 1.093s-.417-.185-.86-.702L7.903 4.682c-.197-.229-.295-.343-.27-.483s.144-.207.383-.34c.439-.247.928-.413 1.448-.478m4.171-.097c-.293-.027-.44-.04-.537.05-.098.088-.098.238-.098.539V9.65c0 .283 0 .424.088.512s.23.088.512.088h4.05c.293 0 .44 0 .529-.093.088-.093.081-.239.067-.53a87 87 0 0 0-.168-2.523c-.148-1.88-1.637-3.487-3.542-3.723q-.452-.056-.9-.097m-7.88 6.343c-.015.291-.023.437.066.53s.236.093.53.093h2.385c.563 0 .845 0 .925-.175.08-.174-.103-.388-.47-.815L6.868 6.547c-.286-.333-.43-.5-.613-.45s-.217.246-.286.638a4 4 0 0 0-.046.37 87 87 0 0 0-.168 2.522"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_03;
