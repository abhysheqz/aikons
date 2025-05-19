import React from "react";
const Podcast: React.FC<
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
        d="M12 4.142c-4.308 0-7.8 3.388-7.8 7.567 0 1.556.484 3 1.313 4.203l.542.786-1.62 1.052-.543-.786a9.2 9.2 0 0 1-1.642-5.255C2.25 6.485 6.615 2.25 12 2.25s9.75 4.235 9.75 9.459a9.2 9.2 0 0 1-1.642 5.255l-.543.786-1.62-1.052.542-.786a7.37 7.37 0 0 0 1.313-4.203c0-4.18-3.492-7.567-7.8-7.567"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 11a3.75 3.75 0 1 1 7.5 0v2a3.75 3.75 0 1 1-7.5 0z"
      />
      <path
        fill="currentColor"
        d="M13 18.813V15h-2v3.813l-1.75 1.312v1.625h5.5v-1.625z"
      />
    </svg>
  );
};
export default Podcast;
