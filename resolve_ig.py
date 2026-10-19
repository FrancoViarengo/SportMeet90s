import urllib.request

urls = [
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErS0z-71xeaY5GEAXgdXQO5d4Au03Uxtn9S3F8HQh5yBTa3cnNDqXtn9FVSu4GcJ8gf9gQ-ZbAahF_rWOwKAFs8GFk4sJQY3TX4CmRUcvlvjJmXoYIA9mFHR4k2juQ",
    "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEJuev3oQhMt5TZNsgs5P89rYS2XR7sj1N9V_LorD7gj2yo-wuk8dTlxjfZHBuPYNi9bnS99EuFLQKgE3orlhznzoV-6XYW4sLqnAkMinFScQSJBJyeVx18Fwe7RMo1c8Nl"
]

for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print("Resolved IG:", res.geturl())
    except Exception as e:
        print("Error:", e)
