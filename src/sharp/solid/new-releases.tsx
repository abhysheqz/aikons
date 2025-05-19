import React from "react";
const NewReleases: React.FC<
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
        d="M12.535 1.475a.75.75 0 0 0-1.07 0L9.21 3.772l-3.254-.6a.75.75 0 0 0-.88.641l-.4 3.088-2.98 1.323a.75.75 0 0 0-.344 1.063L2.93 12l-1.58 2.713a.75.75 0 0 0 .345 1.063l2.98 1.323.4 3.088a.75.75 0 0 0 .88.64l3.254-.599 2.255 2.297a.75.75 0 0 0 1.07 0l2.255-2.297 3.254.6a.75.75 0 0 0 .88-.641l.4-3.088 2.98-1.323a.75.75 0 0 0 .344-1.063L21.07 12l1.58-2.713a.75.75 0 0 0-.345-1.063l-2.98-1.323-.4-3.088a.75.75 0 0 0-.88-.64l-3.254.599zm-1.761 14.384 5.916-5.635-1.38-1.448-4.583 4.365-1.562-1.388-1.33 1.494z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NewReleases;
