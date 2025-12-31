using Microsoft.AspNetCore.Mvc;
using MySqlConnector;

namespace MySqlApi.Controllers {
    [ApiController]
    [Route("mysqlapi")]
    public class MySqlController : ControllerBase {

        private readonly ILogger<MySqlController> _logger;

        public MySqlController(ILogger<MySqlController> logger) {
            _logger = logger;
        }

        [HttpGet(Name = "GetSqlDb")]
        public string Get() {
            var mySqlConnection = new MySqlConnection("server=mysql;user=root;password=password;database=mysql");
            mySqlConnection.Open();
            var mySqlCommand = new MySqlCommand("show databases;", mySqlConnection);
            var mySqlReader = mySqlCommand.ExecuteReader();
            var mySqlDatabases = "";

            while (mySqlReader.Read()) {
                mySqlDatabases += mySqlReader.GetString(0) + ",";
            }

            return "MySql Databases: " + mySqlDatabases;
            ;

        }
    }
}
