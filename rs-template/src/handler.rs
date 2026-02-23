use crate::config::HandlerConfig;
use actix_web::{HttpRequest, HttpResponse, http::Method, web::Data};
use log::info;

// Implement your function's logic here
pub async fn index(req: HttpRequest, config: Data<HandlerConfig>) -> HttpResponse {
    info!("{:#?}", req);
    if req.method() == Method::GET && req.path() == "/" {
       return HttpResponse::Ok().body("Hello from STACKIT Functions");
    }

    HttpResponse::NotFound().body("not_found")
}
