import React from "react";
const ArrowDown_02: React.FC<
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
        d="M12 21a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v16a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 18.972a5 5 0 0 1-.675-.503c-.482-.425-1.032-1.012-1.564-1.625a43 43 0 0 1-1.956-2.437 1 1 0 0 0-1.61 1.186l.003.004c.109.144.425.563.61.8.372.477.885 1.116 1.443 1.759.553.637 1.17 1.3 1.75 1.812.288.255.59.493.89.674.271.163.666.358 1.109.358s.838-.195 1.11-.358c.298-.18.6-.419.89-.674.578-.512 1.196-1.175 1.75-1.812a45 45 0 0 0 2.052-2.559l.003-.004a1 1 0 0 0-1.61-1.186 42.403 42.403 0 0 1-1.956 2.438c-.532.612-1.082 1.199-1.564 1.624-.242.214-.52.41-.675.503"
      />
    </svg>
  );
};
export default ArrowDown_02;
