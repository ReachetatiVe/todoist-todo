import { getColor } from "@doist/todoist-api-typescript";

export default {
  methods: {
    getColorById(id) {
      return getColor(id);
    },
  },
};
