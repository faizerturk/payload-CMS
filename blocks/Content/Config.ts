import { Block } from "payload/types";

export const Content: Block = {
  slug: "content",
  labels: {
    singular: "Content",
    plural: "Content Blocks",
  },
  fields: [
    {
      name: "backgroundColor",
      label: "Background Color",
      type: "radio",
      defaultValue: "none",
      options: [
        {
          label: "None",
          value: "node",
        },
        {
          label: "Red",
          value: "red",
        },
        {
          label: "Blur",
          value: "blue",
        },
        {
          label: "Orange",
          value: "orange",
        },
      ],
      admin: {
        layout: "horizontal",
      },
    },
    {
      name: "columns",
      type: "array",
      minRows: 1,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "width",
              label: "Column Width",
              type: "select",
              defaultValue: "full",
              required: true,
              options: [
                {
                  label: "One Third",
                  value: "oneThird",
                },
                {
                  label: "Half",
                  value: "half",
                },
                {
                  label: "Two Thirds",
                  value: "twoThirds",
                },
                {
                  label: "Full Width",
                  value: "full",
                },
              ],
              admin: {
                width: "50%",
              },
            },
            {
              name: "alignment",
              label: "Alignment",
              type: "select",
              defaultValue: "left",
              required: true,
              options: [
                {
                  label: "Left",
                  value: "left",
                },
                {
                  label: "Center",
                  value: "center",
                },
                {
                  label: "Right",
                  value: "right",
                },
              ],
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          name: "content",
          type: "richText",
          required: true,
        },
      ],
    },
    {
      name: "accentLine",
      label: "Enable Accent Line",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "accentLineAlignment",
      label: "Accent Line Alignment",
      type: "radio",
      options: [
        { label: "left", value: "left" },
        { label: "right", value: "right" },
      ],
      admin: {
        condition: (_, sibligData) => sibligData.accentLine,
        layout: "horizontal",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "paddingTop",
          label: "Padding Top",
          type: "select",
          defaultValue: "medium",
          options: [
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" },
          ],
          admin: {
            width: "50%",
          },
        },
        {
          name: "paddingBottom",
          label: "Padding Bottom",
          type: "select",
          defaultValue: "medium",
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
    },
  ],
};

export default Content;
