import React from "react";
const ListSetting: React.FC<
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
        d="M16.5 12a1 1 0 0 1 1 1v.27a3.9 3.9 0 0 1 1.595.84l.358-.233a1 1 0 0 1 1.094 1.675l-.334.218a3.8 3.8 0 0 1 0 2.46l.333.218a1 1 0 1 1-1.093 1.675l-.358-.234a3.9 3.9 0 0 1-1.595.841V21a1 1 0 1 1-2 0v-.27a3.9 3.9 0 0 1-1.595-.84l-.358.233a1 1 0 0 1-1.093-1.675l.333-.217a3.8 3.8 0 0 1 0-2.461l-.334-.218a1 1 0 1 1 1.094-1.675l.358.234a3.9 3.9 0 0 1 1.595-.841V13a1 1 0 0 1 1-1m0 3.143a1.93 1.93 0 0 0-1.6.835 1.803 1.803 0 0 0 0 2.043c.34.501.927.836 1.6.836a1.93 1.93 0 0 0 1.6-.835 1.802 1.802 0 0 0 0-2.043 1.93 1.93 0 0 0-1.6-.836M3 3a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 9a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ListSetting;
