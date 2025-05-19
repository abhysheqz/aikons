import React from "react";
const PiCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-3.5 8.822c0-.448.431-.982 1.185-1l-.802 5.77q0 .001-.002.005a.1.1 0 0 1-.036.035.3.3 0 0 1-.205.043.3.3 0 0 1-.127-.048.1.1 0 0 1-.032-.036l-.043-.116-1.876.695.043.116c.288.777 1.005 1.273 1.78 1.373 1.113.143 2.308-.557 2.48-1.79l.839-6.047h2.425l-.953 6.863 1.981.275.991-7.138H17.5v-2H9.722c-1.678 0-3.222 1.247-3.222 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PiCircle;
