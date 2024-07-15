# Timestamp Microservice

This is a Timestamp Microservice built with Node.js and Express for freeCodeCamp.

## Endpoints

- `/api/:date?`: Returns a JSON object with `unix` and `utc` keys.

### Example Usage

- `/api/2015-12-25`
- `/api/1451001600000`

### Example Output

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
