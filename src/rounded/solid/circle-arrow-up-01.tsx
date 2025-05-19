import React from "react";
const CircleArrowUp_01: React.FC<
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
        d="M12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12 6.063 22.75 12 22.75m-.063-11.21.063-.026.063.026q.173.077.454.263c.373.247.804.59 1.225.954.416.36.804.722 1.088.995l.456.449a1 1 0 0 0 1.428-1.402l-.498-.489c-.3-.289-.715-.676-1.167-1.067a15 15 0 0 0-1.427-1.108 5.4 5.4 0 0 0-.736-.417c-.23-.104-.544-.218-.886-.218s-.656.114-.887.218c-.247.112-.498.26-.735.417-.476.316-.98.722-1.427 1.108-.452.39-.867.778-1.167 1.067l-.498.49a1 1 0 0 0 1.427 1.4l.457-.447c.284-.274.672-.636 1.088-.996.421-.363.851-.707 1.225-.954q.282-.185.454-.263"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUp_01;
