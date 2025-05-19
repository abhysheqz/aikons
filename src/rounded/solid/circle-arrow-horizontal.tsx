import React from "react";
const CircleArrowHorizontal: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m4.057 8.248A.75.75 0 0 0 14.75 10v1h-5.5v-1a.75.75 0 0 0-1.307-.502c-.056.062-.174.17-.367.344l-.042.037c-.17.152-.37.333-.563.52-.207.2-.426.428-.599.66-.146.195-.372.538-.372.941s.226.746.372.942c.173.231.392.46.599.66.192.186.394.367.563.519l.042.037c.193.174.311.282.367.344A.75.75 0 0 0 9.25 14v-1h5.5v1a.75.75 0 0 0 1.307.501c.056-.06.174-.17.367-.343l.042-.037c.17-.152.37-.333.563-.52.207-.2.426-.428.599-.66.146-.195.372-.538.372-.941s-.226-.746-.372-.942a6 6 0 0 0-.599-.66 20 20 0 0 0-.563-.519l-.042-.037a6 6 0 0 1-.367-.344"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowHorizontal;
