# Training Metrics

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## RESTful Hypermedia API (samples)

### List of body parts to train
Uri | Method | Auth | HTTPS | CORS |
|---|---|---|---|---|
| /bodybuilding | GET | `OAuth` | yes | yes |

```json
{
  "total_items": 7,
  "total_pages": 1,
  "body_parts": [
    {
      "id": "72255d4849af8ed6e0df1173",
      "name": "Lorem ipsum dolor sit amet,",
      "description": "",
      "links": [
        {
          "href": "/bodybuilding/72255d4849af8ed6e0df1173",
          "rel": "self",
          "method": "GET"
        }
      ]
    },
    ...
  ],
  "links": [
    {
      "href": "/bodybuilding",
      "rel": "self",
      "method": "GET"
    },
    {
      "href": "/bodybuilding/workouts",
      "rel": "workouts",
      "method": "GET"
    }
  ]
}
``` 

### Body part description
Uri | Method | Auth | HTTPS | CORS |
|---|---|---|---|---|
| /bodybuilding/{id} | GET | `OAuth` | yes | yes |

```json
{
  "id": "72255d4849af8ed6e0df1173",
  "name": "Lorem ipsum dolor sit amet,",
  "description": "Nam vel finibus felis. Vestibulum iaculis mollis dapibus.",
  "workouts": [
    {
      "id": "03223056l66712u6op578ke65ta",
      "name": "Nulla in tortor efficitur",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "links": [
        {
          "href": "/bodybuilding/workouts/03223056l66712u6op578ke65ta",
          "rel": "self",
          "method": "GET"
        }
      ]
    },
    ...
  ],
  "links": [
    {
      "href": "/bodybuilding/72255d4849af8ed6e0df1173",
      "rel": "self",
      "method": "GET"
    }
  ]
}
``` 

