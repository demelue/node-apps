TODO: WRITE SCRIPT TO DO THIS!!!

How to Create A server and CA certificate & key
1.) create new cert from keychain access
2.) export key to file
3.) convert key to .pem with command "openssl pkcs12 -in Certificates.p12 -out Certificates.pem -nodes"
4.) separate into two files if you want and use with webserver
