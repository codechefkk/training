[{
  "group": "admin",
  "permissions": [{
    "resource": "*",
    "methods": "*"
  }],
  "action": "allow"
  }, {
  "group": "user",
  "permissions": [{
    "resource": "users",
    "methods": [
      "POST",
      "GET",
    ],
    "action": "allow"
  }]
}]
