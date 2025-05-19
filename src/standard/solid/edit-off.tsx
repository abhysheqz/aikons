import React from "react";
const EditOff: React.FC<
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
        d="M1.286 1.286a.977.977 0 0 1 1.382 0l19.546 19.546a.977.977 0 0 1-1.382 1.382L1.286 2.668a.977.977 0 0 1 0-1.382"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.777 8.777 2.83 14.723c-.372.372-.581.876-.581 1.402v4.134c0 .547.444.991.991.991h4.134c.525 0 1.03-.209 1.401-.58l5.947-5.947zM16.475 12.971l1.218-1.218-5.947-5.946-1.218 1.218zM20.67 8.777l-1.917 1.916-5.946-5.947 1.916-1.915a1.98 1.98 0 0 1 2.803 0l3.143 3.143c.774.774.774 2.029 0 2.803"
      />
    </svg>
  );
};
export default EditOff;
