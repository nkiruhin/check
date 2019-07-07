using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Xml.Linq;
using check.Models;
using check.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FindCheckController : ControllerBase
    {
        private readonly ILoadData _loadData;


        public FindCheckController(ILoadData loadData)
        {
            _loadData = loadData;
        }

        // GET: api/FindCheck
        [HttpGet]
        public ActionResult<List<CheckEntity>> Get([FromQuery] string inn,string trim)
        {
            if (string.IsNullOrEmpty(inn) && string.IsNullOrEmpty(trim))
            {
                return NotFound(new { message = "Данные не найдены" });
            }
            XDocument data = _loadData.GetDocument();
           
            string namespeces = "{"+data.Root.Name.NamespaceName+"}";
            var inspections = data.Root.Elements();
           
            var checks = inspections.Elements(namespeces + "I_SUBJECT")
                .Where(n => (string.IsNullOrEmpty(inn)|| n.Attribute("INN")?.Value == inn)
                      &&(string.IsNullOrEmpty(trim) || n.Attribute("ORG_NAME").Value.ToLower().Contains(trim.ToLower()))
                      )
                .Select(n => new CheckEntity
                {
                    StartDate = n.Parent.Attribute("START_DATE")?.Value,
                    Status = n.Parent.Attribute("STATUS")?.Value,
                    ProsecutorsName = n.Parent.Attribute("PROSEC_NAME")?.Value,
                    OkatoName = n.Parent.Element(namespeces + "OKATO")?.Attribute("OKATO_NAME")?.Value,
                    TypeName = n.Parent.Attribute("ITYPE_NAME")?.Value,
                    GoalOrganizationName = n.Attribute("ORG_NAME")?.Value,
                    ProviderOrganizationName = n.Parent.Element(namespeces + "I_CLASSIFICATION")?.Attribute("ISUPERVISION_NAME")?.Value,
                    INN = n.Attribute("INN")?.Value,
                    OGRN = n.Attribute("OGRN")?.Value,
                    Inspectors = n.Parent
                                .Elements(namespeces + "I_INSPECTOR")
                                .Select(v => new Inspector
                                {
                                    FullName = v.Attribute("FULL_NAME").Value,
                                    Position = v.Attribute("POSITION").Value
                                }).ToList()

                });
                
            return checks.ToList();
        }

        // GET: api/FindCheck/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/FindCheck
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/FindCheck/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
