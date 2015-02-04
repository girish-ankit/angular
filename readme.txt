1>.To run tutorial folder corerctely please do the following changes to virtual hosts file:

<VirtualHost *:80>
#    ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot /var/www/html/angular/tutorial/AngularJSDemos/AngularJSDemos
    ServerName   www.local-ngt.com
#   ServerAlias test.com mail.test.com ankit.de www.local-domain.com
#    ErrorLog logs/dummy-host.example.com-error_log
#    CustomLog logs/dummy-host.example.com-access_log common
</VirtualHost>

and enter following information to hosts file:

127.0.0.1   www.local-ngt.com



