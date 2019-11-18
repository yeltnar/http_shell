curl -X GET \
  https://localhost:3000/exec \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 201' \
  -H 'Content-Type: application/json' \
  -H 'Cookie: connect.sid=s%3AspvdJsXM_sDhHu2ck4dl3V4zG-liEJpV.ac0girUp9z%2BqQMy1aqL%2FQ02n8dx5ReWh5zQSF2Fl5RY' \
  -H 'Host: localhost:3000' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -d '{
	"command":"mkdir /tmp/rm; mkdir /tmp/rm/http_test; cd /tmp/rm/http_test; git clone https://github.com/yeltnar/express_starter.git . && npm run docker"
}'