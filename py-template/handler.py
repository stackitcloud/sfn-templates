import json
from typing import Any, Dict, Optional


def new():
    return Function()

class Function:
    # Optional lifecycle hooks
    async def start(self):
        # init resources, warm caches, open pools, etc.
        return

    async def stop(self):
        # cleanup
        return


    # Implement your function here
    async def handle(self, scope, receive, send):
        assert scope["type"] == "http"
        method = scope.get("method", "GET")
        path = scope.get("path", "/")

        # ---  routing ---
        if method == "GET" and path == "/":

            await send({"type": "http.response.start", "status": 200, "headers": dict()})
            return await send({"type": "http.response.body", "body": "Hello from STACKIT Functions".encode("utf-8")})

        # ---  default ---
        await send({"type": "http.response.start", "status": 404, "headers": dict()})
        return await send({"type": "http.response.body", "body": "not_found".encode("utf-8")})
