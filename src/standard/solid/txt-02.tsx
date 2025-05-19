import React from "react";
const Txt_02: React.FC<
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
        d="M12.114 13.357a.75.75 0 0 1 1.03.257L14 15.042l.857-1.428a.75.75 0 1 1 1.286.772L14.875 16.5l1.268 2.114a.75.75 0 1 1-1.286.772L14 17.958l-.857 1.428a.75.75 0 0 1-1.286-.772l1.268-2.114-1.268-2.114a.75.75 0 0 1 .257-1.03M6.25 14a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-.75V19a.75.75 0 0 1-1.5 0v-4.25H7a.75.75 0 0 1-.75-.75m11 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-.75V19a.75.75 0 0 1-1.5 0v-4.25H18a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.274 19.823a2.924 2.924 0 0 0 2.917 2.927h11.642c1.193 0 2.218-.72 2.67-1.75H8.5a2 2 0 0 1-2-2v-3.063A2 2 0 0 1 7 12h12.75V9.055a.98.98 0 0 0-.285-.692l-6.809-6.827a.97.97 0 0 0-.687-.286H5.168A2.924 2.924 0 0 0 2.25 4.186zm9.293-16.617 6.237 6.255h-4.737a1.5 1.5 0 0 1-1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Txt_02;
