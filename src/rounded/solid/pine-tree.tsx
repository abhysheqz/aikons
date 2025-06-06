import React from "react";
const PineTree: React.FC<
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
        d="M12.09 1.25c-.435-.001-.783.177-1.076.392-.267.196-.556.473-.872.778L7.917 4.558c-.32.307-.587.565-.781.779-.184.202-.399.465-.484.788a1.73 1.73 0 0 0 .82 1.94q.165.092.343.14l-1.152 1.16c-.387.39-.711.716-.94.99-.217.261-.466.605-.503 1.027a1.73 1.73 0 0 0 .666 1.52c.284.22.634.298.947.334l-.912 1.098c-.55.662-1.015 1.223-1.3 1.692-.286.47-.545 1.095-.223 1.743.316.636.962.826 1.51.903.554.078 1.296.078 2.176.078H11v3a1 1 0 1 0 2 0v-3h2.733c.948 0 1.74 0 2.325-.081.57-.08 1.256-.274 1.566-.949.315-.688-.008-1.33-.335-1.797-.334-.476-.868-1.043-1.504-1.72l-.916-.972c.39-.045.84-.146 1.172-.482a1.73 1.73 0 0 0 .493-1.034c.053-.503-.193-.93-.424-1.255-.236-.334-.587-.73-1-1.2L16.2 8.233c.164-.034.329-.088.48-.177a1.73 1.73 0 0 0 .81-1.903c-.082-.33-.298-.6-.484-.808-.196-.219-.467-.481-.79-.795l-2.184-2.12c-.315-.306-.602-.585-.867-.781-.293-.217-.64-.397-1.075-.398"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PineTree;
