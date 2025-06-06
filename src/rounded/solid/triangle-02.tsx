import React from "react";
const Triangle_02: React.FC<
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
        d="M10.895 3.805c-.569.716-1.206 1.819-2.13 3.426l-.365.634a1 1 0 0 1-1.734-.997l.365-.634.043-.075c.87-1.514 1.581-2.75 2.254-3.598C10.02 1.691 10.85 1 12 1c1.15 0 1.98.69 2.672 1.561.673.848 1.384 2.084 2.254 3.598l.408.709a1 1 0 0 1-1.734.997l-.364-.634c-.925-1.607-1.562-2.71-2.13-3.426C12.544 3.099 12.23 3 12 3s-.545.099-1.105.805m8.102 7.96a1 1 0 0 1 1.365.369l.408.708c.825 1.436 1.503 2.615 1.877 3.575.385.989.56 2.025-.026 2.986-.578.949-1.575 1.294-2.64 1.447-1.044.15-2.435.15-4.141.15H15a1 1 0 1 1 0-2h.757c1.809 0 3.055-.003 3.94-.13.882-.126 1.113-.339 1.216-.507.095-.156.178-.43-.13-1.22-.312-.802-.91-1.85-1.79-3.38l-.364-.632a1 1 0 0 1 .368-1.366m-13.994 0a1 1 0 0 1 .368 1.366l-.363.632c-.88 1.53-1.48 2.578-1.792 3.38-.307.79-.224 1.064-.129 1.22.103.168.334.38 1.216.508.885.127 2.131.129 3.94.129H9a1 1 0 1 1 0 2h-.84c-1.706 0-3.097 0-4.141-.15-1.065-.153-2.062-.498-2.64-1.447-.586-.961-.411-1.997-.026-2.986.374-.96 1.052-2.14 1.878-3.575l.407-.708a1 1 0 0 1 1.365-.369M12 17a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M20.527 8.499a1 1 0 0 1-.366 1.366l-3.464 2a1 1 0 0 1-1-1.732l3.464-2a1 1 0 0 1 1.366.366M3.472 8.501a1 1 0 0 1 1.366-.366l3.465 2a1 1 0 0 1-1 1.732l-3.464-2a1 1 0 0 1-.367-1.366"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Triangle_02;
