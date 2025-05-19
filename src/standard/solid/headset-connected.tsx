import React from "react";
const HeadsetConnected: React.FC<
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
        d="M4.072 12.751a1.68 1.68 0 0 1 1.782-.162l.929.464c.592.297.967.903.967 1.565v4.764a1.75 1.75 0 0 1-.967 1.566l-.929.464a1.68 1.68 0 0 1-1.782-.163c-.443-.344-1.125-.922-1.703-1.628-.56-.686-1.119-1.606-1.119-2.62s.558-1.935 1.12-2.62c.577-.707 1.259-1.285 1.702-1.63"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4a7 7 0 0 0-7 7v2.5a1 1 0 1 1-2 0V11a9 9 0 0 1 18 0v2.5a1 1 0 1 1-2 0V11a7 7 0 0 0-7-7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.146 12.59a1.68 1.68 0 0 1 1.782.161c.443.345 1.125.923 1.703 1.63.56.685 1.119 1.605 1.119 2.62 0 1.014-.558 1.934-1.12 2.62-.577.706-1.259 1.284-1.702 1.628a1.68 1.68 0 0 1-1.783.163l-.928-.464a1.75 1.75 0 0 1-.967-1.566v-4.764c0-.662.375-1.268.967-1.565z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.996 14.25c-1.298 0-2.492.483-3.471 1.284a.75.75 0 0 0 .95 1.161c.744-.608 1.609-.945 2.52-.945.916 0 1.784.339 2.529.951a.75.75 0 0 0 .952-1.159c-.981-.806-2.178-1.292-3.48-1.292M11.996 17.268c-.736 0-1.425.217-2.024.591a.75.75 0 1 0 .793 1.273c.381-.238.798-.364 1.23-.364.436 0 .855.127 1.237.367a.75.75 0 0 0 .797-1.27 3.8 3.8 0 0 0-2.033-.597M12 20a1 1 0 1 0 0 2h.006a1 1 0 0 0 0-2z"
      />
    </svg>
  );
};
export default HeadsetConnected;
