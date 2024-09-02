# Notes

Cookies are small strings of data which are stored in browser.
They are set by web server using Set-Cookies HTTP header. Then browser automatically adds them to (almost) every request to the same domain.

### Most widespread use cases:
* Upon sign-in the server uses the `Set-Cookies` HTTP header in the response to set cookie with unique identifier
* Next time the request is sent to the same domain, the browser sends the cookie over the net using Cookie HTTP header
* So the server knows who sent request

If you set cookies manually it won't overwrite all string, but concatenate existed.
When you have multiple cookie, you can concatenate them with `,`

Cookies live time should be converted `.toUTCString()`
Cookies should be decoded with `.decodeURIComponent()`

### Flags
Domain - allow set cookies from subdomain
Expires - time cookies live
Path - path where cookies accessible, `/admin || / (/ and /home the same)`
Secure - makes cookie HTTP only
Samesite - refuse to sent the cookie with request coming from outside the site.

# Materials

Video - https://www.youtube.com/watch?v=i7oL_K_FmM8&t=3s

https://javascript.info/cookie