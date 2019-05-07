(* Generated by mirage configure -t unix --net=socket --http=8080 --https=4433 (2019-05-07 04:46:44-00:00). *)

let certs_kv_ro () = `Crunch

let data_kv_ro () = `Crunch

let dhcp () = false

let http_port =Functoria_runtime.Key.create
  (Functoria_runtime.Arg.opt Cmdliner.Arg.int (8080) (Cmdliner.Arg.info
   ~docs:"APPLICATION OPTIONS" ?docv:(None)
   ?doc:(Some "Listening HTTP port.  ") ?env:(None) ["http"]))
let http_port_t = Functoria_runtime.Key.term http_port
let http_port () = Functoria_runtime.Key.get http_port

let https_port =Functoria_runtime.Key.create
  (Functoria_runtime.Arg.opt Cmdliner.Arg.int (4433) (Cmdliner.Arg.info
   ~docs:"APPLICATION OPTIONS" ?docv:(None)
   ?doc:(Some "Listening HTTPS port.  ") ?env:(None) ["https"]))
let https_port_t = Functoria_runtime.Key.term https_port
let https_port () = Functoria_runtime.Key.get https_port

let ips =Functoria_runtime.Key.create
  (Functoria_runtime.Arg.opt (Cmdliner.Arg.list Mirage_runtime.Arg.ipv4_address) 
   [(Ipaddr.V4.of_string_exn "0.0.0.0")] (Cmdliner.Arg.info
   ~docs:"UNIKERNEL PARAMETERS" ?docv:(Some "IPS")
   ?doc:(Some "The IPv4 addresses bound by the socket in the unikernel.  ")
   ?env:(None) ["ips"]))
let ips_t = Functoria_runtime.Key.term ips
let ips () = Functoria_runtime.Key.get ips

let logs =Functoria_runtime.Key.create
  (Functoria_runtime.Arg.opt (Cmdliner.Arg.list Mirage_runtime.Arg.log_threshold) [] (Cmdliner.Arg.info
   ~docs:"UNIKERNEL PARAMETERS" ?docv:(Some "LEVEL")
   ?doc:(Some
           "Be more or less verbose. $(docv) must be of the form\n$(b,*:info,foo:debug) means that that the log threshold is set to\n$(b,info) for every log sources but the $(b,foo) which is set to\n$(b,debug).  ")
   ?env:(Some (Cmdliner.Arg.env_var "MIRAGE_LOGS")) ["l"; "logs"]))
let logs_t = Functoria_runtime.Key.term logs
let logs () = Functoria_runtime.Key.get logs

let net () = (Some `Socket)

let no_depext () = false

let prng () = `Stdlib

let socket =Functoria_runtime.Key.create
  (Functoria_runtime.Arg.opt (Cmdliner.Arg.some Mirage_runtime.Arg.ipv4_address) 
   (None) (Cmdliner.Arg.info ~docs:"UNIKERNEL PARAMETERS"
   ?docv:(Some "SOCKET")
   ?doc:(Some "The IPv4 address bound by the socket in the unikernel.  ")
   ?env:(None) ["socket"]))
let socket_t = Functoria_runtime.Key.term socket
let socket () = Functoria_runtime.Key.get socket

let target () = `Unix

let target_debug () = false

let warn_error () = false

let runtime_keys = List.combine [http_port_t; https_port_t; ips_t; logs_t;
                                 socket_t] ["http_port"; "https_port"; 
                                            "ips"; "logs"; "socket"]

