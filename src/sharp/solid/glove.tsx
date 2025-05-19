import React from "react";
const Glove: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.986 2.263c-.203-.013-.447-.013-.86-.013-.358 0-.635 0-.819.01-3.402.19-6.105 2.942-6.291 6.369-.01.186-.01.4-.01.762v2.335l-.174-.235a2.804 2.804 0 0 0-4.26-.306 2.87 2.87 0 0 0-.26 3.718l5.075 6.847H20.13l.655-3.75H13.5v-2h7.635l.949-5.436c.068-.415.108-.658.13-.862.393-3.812-2.428-7.205-6.228-7.44"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Glove;
