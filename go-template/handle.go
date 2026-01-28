package function

import (
	"net/http"
)

// Handle an HTTP Request.
func Handle(w http.ResponseWriter, r *http.Request) {

	if r.RequestURI == "/" && r.Method == "GET" {

		w.WriteHeader(200)
		w.Write([]byte("Hello from STACKIT Functions"))
		return
	}

	w.WriteHeader(404)
	w.Write([]byte("not_found"))
}
