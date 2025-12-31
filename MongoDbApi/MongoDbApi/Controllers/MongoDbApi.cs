using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace MongoDbApi.Controllers {
    [ApiController]
    [Route("mongodbapi")]
    public class MongoDbApi : ControllerBase {

        [HttpGet(Name = "GetMongoDb")]
        public IActionResult Get() {
            MongoClient mongoClient = new MongoClient("mongodb://...");
            var result = "MongoDb Databases: " + string.Join(",", mongoClient.ListDatabases().ToList());


            return Ok(result);
        }
    }
}
