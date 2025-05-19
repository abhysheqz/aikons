import React from "react";
const Aids: React.FC<
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
        d="M5.315 4.696c.398-1.506 1.613-2.368 2.844-2.838 1.229-.468 2.757-.608 3.843-.608s2.61.141 3.839.61c1.231.468 2.446 1.33 2.844 2.836.274 1.037.403 2.009.25 2.98-.15.95-.558 1.827-1.231 2.717L13.177 6.44l2.714-2.437a4 4 0 0 0-.77-.384c-.918-.35-2.173-.477-3.119-.477s-2.205.126-3.122.476q-.44.168-.771.384L21 15.264l-5.174 7.485-9.46-12.266c-.715-.922-1.146-1.825-1.3-2.808-.154-.971-.025-1.943.249-2.98M11.046 19.009 6.134 12.64 3 15.265l5.174 7.485z"
      />
    </svg>
  );
};
export default Aids;
