import urllib.request

urls = [
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGkGgk346dTCOibp9P4v9bVwfYI1k9_M-bMlF_FxZdeZPwL2f90HWcuT9Qls8vE-p-ExQ4RQDNsguVNIJ2ZnkmvZBNAJ0C2H77LTcr7YFCiYBLjr5h84ufEgLv5XNR4-_o=",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHyYyQWXFULy2V46J0fLoHoh9zkNuKQ2IQHkiugWlJK50QxZblpQIe1mssPN6XY2B0QwZjqqsTHQXCkLqZI3KBpVsC2cD9BbxEt3EgO7ZONyqse3Q60-GAWe1pX-n1e_7Wb",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGBJDUfvekYQmmTIfVXznH1KW39vFGKq5Sk09ltUnJ5ZZXVvF_EHvltFhUWOZm7IiJ0O-SEO9Wq02Vn1sMmkOdMWBjmHBRyzpR9fOGrOYD8pquXhIxlt4s3ykAsWkVMSuyn",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGu9h9lSY3uxu1WBA-fpKt-B_3JN0SaDj8dcdvRcVDdBH60TioDwwnZMlOmiAY9sCWeGm9hEa42XHt7MAPLJawbc-r-SKi7fkdGZ0BxWl2VJE0sFnkl5jC9QjevFoSLmOaD",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTGqTHJN_kbHpMF78IK3Aiytyj_4cXy2QDF0UUiss4dkJHl8g7E5ZoHh-7nMwhNNlHU8ERxI1K3sJhcxI9lb-mpQHMunTOpXXktqBrDeYzpetNe3TWrw4pwvTWriM-ylTb"
]

class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
    def http_error_302(self, req, fp, code, msg, headers):
        return headers

opener = urllib.request.build_opener(urllib.request.HTTPRedirectHandler)

for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print("Resolved:", res.geturl())
    except Exception as e:
        print("Error:", e)
