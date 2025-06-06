import React from "react";
const FlowCircle: React.FC<
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
        d="M12.125 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12.125 19.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M1.125 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.326 3.5h3.549a1 1 0 1 1 0 2h-3.5c-.723 0-1.19.001-1.542.037-.335.034-.453.091-.514.131a1 1 0 0 0-.275.276c-.04.06-.098.179-.132.514-.036.352-.037.819-.037 1.542a1 1 0 1 1-2 0V7.95c0-.66 0-1.23.047-1.695.05-.494.162-.979.459-1.423a3 3 0 0 1 .827-.828c.444-.296.93-.408 1.423-.458C8.096 3.5 8.666 3.5 9.326 3.5m7.549 1a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1m-11 10.5a1 1 0 0 1 1 1c0 .723.001 1.19.037 1.542.034.335.091.453.132.514a1 1 0 0 0 .275.276c.061.04.179.097.514.131.352.036.819.037 1.542.037h3.5a1 1 0 1 1 0 2H9.326c-.66 0-1.23 0-1.695-.047-.494-.05-.979-.162-1.423-.458a3 3 0 0 1-.827-.828c-.297-.444-.409-.93-.459-1.423-.047-.465-.047-1.035-.047-1.695V16a1 1 0 0 1 1-1m11 4.5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlowCircle;
