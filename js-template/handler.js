"use strict";

function newFn() {
  return {
    init: () => {},
    shutdown: () => {},
    handle: async (context, data) => {
      const { method, path, cloudevent } = context;

      if (method === "GET" && path === "/") {
        return {
          statusCode: 200,
          body: "Hello from STACKIT Functions",
        };
      }

      return { statusCode: 404, body: "not_found" };
    },
  };
}

module.exports = { new: newFn };
