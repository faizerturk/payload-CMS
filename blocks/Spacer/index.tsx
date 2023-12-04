import { Block } from "payload/types";

const Spacer: Block = {
  slug: "spacer",
  fields: [
    {
      name: "size",
      label: "size",
      type: "radio",
      options: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
      ],
      admin: {
        width: "50%",
      },
    },
  ],
};
