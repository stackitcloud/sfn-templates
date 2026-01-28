type FnContext = {
  method?: string;
  path?: string;
  query?: Record<string, string>;
  headers?: Record<string, unknown>;
  cloudevent?: any;
  log?: { info: (...a: any[]) => void; error: (...a: any[]) => void };
  cloudEventResponse?: (data: any) => any;
};

type FnInstance = {
  init?: () => void | Promise<void>;
  shutdown?: () => void | Promise<void>;
  handle: (ctx: FnContext, data: any) => any;
};

function newFn(): FnInstance {
  return {
    handle: async (ctx, _data) => {
      const m = ctx.method || "GET";
      const p = ctx.path || "/";

      ctx.log?.info?.({ msg: "fn_handle", method: m, path: p });

      if (m === "GET" && p === "/") {
        return { statusCode: 200, body: "Hello from STACKIT Functions" };
      }

      return {
        statusCode: 404,
        body: { error: "not_found", method: m, path: p },
      };
    },
  };
}

// Contract: wrapper expects either export object with .new() or instance
export = { new: newFn };
